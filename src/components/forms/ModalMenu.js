import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export default function ModalMenu(props) {
  const { id, idMenu, setReload } = props;
  const [nuevoMenu, setNuevoMenu] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (idMenu === 0) {
      setIsEdit(false);
    } else {
      setIsEdit(true);

      db.collection("negocios")
        .doc(id)
        .collection("menu")
        .doc(idMenu)
        .get()
        .then((res) => {
          setNuevoMenu(res.data());
        });
    }
  }, [id, idMenu]);

  const onChangeMenu = (e, type) => {
    setNuevoMenu({ ...nuevoMenu, [type]: e.target.value });
  };

  const agregarMenu = () => {
    if (
      nuevoMenu.nombre === "" ||
      nuevoMenu.descripcion === "" ||
      nuevoMenu.precio === ""
    ) {
      Swal.fire("Error", "Por favor complete todos los campos", "error");
    } else if (nuevoMenu.precio < 0) {
      Swal.fire("Error", "El precio no puede ser menor a 0", "error");
    } else {
      setNuevoMenu({
        ...nuevoMenu,
        precio:
          Math.round((parseFloat(nuevoMenu.precio) + Number.EPSILON) * 100) /
          100,
      });
      setNuevoMenu({
        ...nuevoMenu,
        precio:
          Math.round((parseFloat(nuevoMenu.precio) + Number.EPSILON) * 100) /
          100,
      });

      if (!isEdit) {
        db.collection("negocios")
          .doc(id)
          .collection("menu")
          .add(nuevoMenu)
          .then(() => {
            Swal.fire(
              "Item agregado",
              "El item " + nuevoMenu.nombre + " ha sido agregado exitosamente",
              "success"
            );
            setReload(true);
          })
          .catch((err) => {
            Swal.fire("Error", err, "error");
          });
      } else {
        db.collection("negocios")
          .doc(id)
          .collection("menu")
          .doc(idMenu)
          .update(nuevoMenu)
          .then(() => {
            Swal.fire(
              "Item de menú editado",
              "El item del menú ha sido modificado exitosamente",
              "success"
            );
          })
          .catch((err) => {
            Swal.fire("Error", err, "error");
          });
      }
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id="agregarMenu"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLocal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLocal">
                Nuevo Menu
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Cerrar"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="nombre" className="col-form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    onChange={(e) => {
                      onChangeMenu(e, "nombre");
                    }}
                    defaultValue={nuevoMenu.nombre}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="descripcion" className="col-form-label">
                    Descripcion:
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="descripcion"
                    onChange={(e) => {
                      onChangeMenu(e, "descripcion");
                    }}
                    style={{
                      maxHeight: 110,
                      height: 110,
                      minHeight: 110,
                      width: "100%",
                    }}
                    defaultValue={nuevoMenu.descripcion}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="precio" className="col-form-label">
                    Precio
                  </label>
                  <input
                    type="number"
                    defaultValue={nuevoMenu.precio}
                    min="0"
                    step="0.1"
                    className="form-control"
                    id="precio"
                    onChange={(e) => {
                      onChangeMenu(e, "precio");
                    }}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  agregarMenu();
                }}
                data-dismiss="modal"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
