import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export default function NegocioDetalleMenu(props) {
  const { id } = props;
  const [menu, setMenu] = useState([]);

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
  }, [id]);

  //Agregar locales
  //   const ob = {
  //     dirección: "Una dir",
  //     location: {
  //       altitude: "asdasd",
  //       latitude: "asdasdasdas",
  //       deltaA: "de",
  //       deltaLat: "delat",
  //     },
  //   };
  //   const doSome = () => {
  //     db.collection("negocios")
  //       .doc(id)
  //       .collection("locales")
  //       .add(ob)
  //       .then(() => {
  //         alert("agregado");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  const deleteOnClick = (id, nombre) => {
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
          .delete()
          .then(() => {
            let timerInterval;
            Swal.fire({
              title: "Negocio Eliminada",
              html: nombre + " ha sido eliminado",
              timer: 1000,
              showCloseButton: false,
              onClose: () => {
                clearInterval(timerInterval);
              },
            }).then((result) => {
              window.location.reload();
            });
          })
          .catch((err) => {
            Swal.fire("Algo salió mal", "Erro: " + err, "error");
          });
      } else {
        Swal.fire(
          "Cancelado",
          "El local: " + nombre + " no se ha eliminado",
          "error"
        );
      }
    });
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
                  <p className="col-3 floatLeft">{men.direccion}</p>
                  <p className="col-3 floatLeft"> </p>
                  <p className="col-3 floatLeft"></p>
                  <p className="col-1 floatLeft">
                    <Link
                      to={"/negocios/detalle/" + men.id}
                      className="menuList"
                    >
                      <i className="fas fa-store"></i>
                    </Link>
                  </p>
                  <p className="col-1 floatLeft">
                    <Link
                      to={"/negocios/editar/" + men.id}
                      className="menuList"
                    >
                      <i className="far fa-edit menuList"></i>
                    </Link>
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
      <button className="btn btn-success">+</button>
    </div>
  );
}