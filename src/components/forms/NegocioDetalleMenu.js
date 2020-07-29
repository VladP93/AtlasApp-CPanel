import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import ModalMenu from "./ModalMenu";

const db = firebase.firestore(firebaseApp);

export default function NegocioDetalleMenu(props) {
  const { id } = props;
  const [menu, setMenu] = useState([]);
  const [idMenu, setIdMenu] = useState(0);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    db.collection("negocios")
      .doc(id)
      .collection("menu")
      .get()
      .then((response) => {
        const menuArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          menuArray.push(data);
        });
        setMenu(menuArray);
      })
      .catch((err) => {
        console.log(err);
      });

    setReload(false);
  }, [id, idMenu, reload]);

  const deleteOnClick = (idMenu, nombre) => {
    Swal.fire({
      title: "¿Está seguro que desea eliminar " + nombre + "?",
      text: "Esta acción no puede deshacerse",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.value) {
        db.collection("negocios")
          .doc(id)
          .collection("menu")
          .doc(idMenu)
          .delete()
          .then(() => {
            Swal.fire(
              "Item de munú Eliminado",
              nombre + " ha sido eliminado",
              "success"
            );
            setReload(true);
          })
          .catch((err) => {
            Swal.fire("Algo salió mal", "Erro: " + err, "error");
          });
      } else {
        Swal.fire(
          "Cancelado",
          "El item: " + nombre + " no se ha eliminado",
          "error"
        );
      }
    });
  };

  const editOnClick = (idMenu) => {
    setIdMenu(idMenu);
  };

  return (
    <div>
      {menu.length === 0 ? (
        <div>
          <p>No se encontró menú registrado para este Negocio</p>
        </div>
      ) : (
        <div>
          {menu.map((men) => {
            return (
              <div key={men.id}>
                <div className="container">
                  <p className="col-3 floatLeft">{men.nombre}</p>
                  <p className="col-4 floatLeft">{men.descripcion}</p>
                  <p className="col-3 floatLeft">$ {men.precio}</p>
                  <p className="col-1 floatLeft">
                    <button
                      className="menuList"
                      data-toggle="modal"
                      data-target="#agregarMenu"
                      onClick={() => {
                        editOnClick(men.id);
                      }}
                    >
                      <i className="far fa-edit menuList"></i>
                    </button>
                  </p>
                  <p className="col-1 floatLeft">
                    <button
                      className="menuList"
                      onClick={() => {
                        deleteOnClick(men.id, men.nombre);
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </p>
                </div>
                <div className="clearfix"></div>
                <hr />
              </div>
            );
          })}
        </div>
      )}
      <button
        className="btn btn-success"
        data-toggle="modal"
        data-target="#agregarMenu"
        onClick={() => {
          editOnClick(0);
        }}
      >
        +
      </button>
      {/* Modal Menu*/}
      <ModalMenu id={id} idMenu={idMenu} setReload={setReload} />
    </div>
  );
}
