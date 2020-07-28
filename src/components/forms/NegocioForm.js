import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export default function NegocioForm(props) {
  const { onchangeText, id } = props;
  const [redirecting, setRedirecting] = useState(false);
  const [redirectTo404, setRedirectTo404] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [newFormData, setNewFormData] = useState({
    nombre: "",
    categoria: "",
    descripcion: "",
    createAt: "",
    editedAt: "",
  });
  const [oldFormData, setOldFormData] = useState({
    nombre: "",
    categoria: "",
    descripcion: "",
    createAt: "",
    editedAt: "",
  });
  const [file, setFile] = useState([]);
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    db.collection("categorias")
      .get()
      .then((response) => {
        const categoriaArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          categoriaArray.push(data);
        });
        setCategorias(categoriaArray);
      })
      .catch((err) => {
        Swal.fire("Error", "Error al cargar las categorías", "error");
      });

    if (id) {
      db.collection("negocios")
        .doc(id)
        .get()
        .then((res) => {
          if (res.data()) {
            setOldFormData(res.data());
            firebase
              .storage()
              .ref(`negocios/${id}`)
              .getDownloadURL()
              .then((res) => {
                setPhotoURL(res);
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            setRedirectTo404(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      setNewFormData(oldFormData);
    }
  }, [id, oldFormData]);

  const onChangeFile = (e) => {
    setFile([...file, e.target.files[0]]);
  };

  onchange = (e, type) => {
    setNewFormData({ ...newFormData, [type]: e.target.value });
    if (type === "nombre") {
      onchangeText(e.target.value);
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    if (!id) {
      if (
        newFormData.categoria === "Seleccione una categoría..." ||
        newFormData.categoria === ""
      ) {
        Swal.fire(
          "Error",
          "Por favor seleccione una categoría válida",
          "error"
        );
      } else if (file.length === 0) {
        Swal.fire(
          "Error",
          "Por favor seleccione una foto para el negocio",
          "error"
        );
      } else {
        db.collection("negocios")
          .add({
            nombre: newFormData.nombre,
            categoria: newFormData.categoria,
            descripcion: newFormData.descripcion,
            createAt: new Date(),
            editedAt: new Date(),
          })
          .then(async (res) => {
            const ref = firebase.storage().ref().child(`negocios/${res.id}`);
            await ref
              .put(file[0])
              .then(() => {
                Swal.fire(
                  "Negocio agregado",
                  newFormData.nombre + " ha sido agregado correctamente",
                  "success"
                );
                setRedirecting(true);
              })
              .catch((err) => {
                Swal.fire("Algo salió mal", "Error: " + err, "error");
                setRedirectTo404(true);
              });
          })
          .catch((err) => {
            Swal.fire("Algo salió mal", "Error: " + err, "error");
            setRedirectTo404(true);
          });
      }
    } else {
      db.collection("negocios")
        .doc(id)
        .update(newFormData)
        .then(async () => {
          if (file.length === 0) {
            Swal.fire(
              "Negocio editado",
              "El negocio " +
                newFormData.nombre +
                " ha sido editado correctamente, sin modificar la foto",
              "success"
            );
            setRedirecting(true);
          } else {
            const ref = firebase.storage().ref().child(`negocios/${id}`);
            await ref
              .put(file[0])
              .then(() => {
                Swal.fire(
                  "Negocio editado",
                  newFormData.nombre +
                    " y su foto han sido editados correctamente",
                  "success"
                );
                setRedirecting(true);
              })
              .catch((err) => {
                Swal.fire("Algo salió mal", "Error: " + err, "error");
                setRedirectTo404(true);
              });
          }
        })
        .catch((err) => {
          Swal.fire("Algo salió mal", "Error: " + err, "error");
        });
    }
  };

  if (redirecting) {
    return <Redirect to="/negocios" />;
  }
  if (redirectTo404) {
    return <Redirect to="/error" />;
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitData(e);
        }}
      >
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Nombre del negocio"
            onChange={(e) => {
              onchange(e, "nombre");
            }}
            defaultValue={oldFormData.nombre}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
            className="form-control"
            onChange={(e) => {
              onchange(e, "categoria");
            }}
            defaultValue={oldFormData.categoria}
          >
            <option defaultValue>Seleccione una categoría...</option>
            {categorias.map((cat) => {
              return <option key={cat.id}>{cat.categoria}</option>;
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            className="form-control"
            id="descripcion"
            placeholder="Nombre del negocio"
            onChange={(e) => {
              onchange(e, "descripcion");
            }}
            defaultValue={oldFormData.descripcion}
            style={{ minHeight: 100, maxHeight: 250 }}
            required
          />
        </div>
        {id && (
          <img src={photoURL} alt="foto xD" height="300px" width="300px" />
        )}
        <div className="form-group" id="divFoto">
          <label htmlFor="file0">Foto</label>
          <input
            type="file"
            className="form-control-file"
            id="file0"
            name="file0"
            onChange={(e) => onChangeFile(e)}
          />
        </div>
        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  );
}
