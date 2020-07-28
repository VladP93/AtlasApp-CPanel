import React, { useState, useEffect } from "react";
import { firebaseApp } from "../../utils/firebase";
import { FireSQL } from "firesql";
import firebase from "firebase/app";
import "firebase/firestore";

import Header from "../common/Header";
import Slider from "../common/Slider";
import Footer from "../common/Footer";
import NegocioList from "../forms/NegocioList";

const db = firebase.firestore(firebaseApp);
const fireSQL = new FireSQL(firebase.firestore(), { includeId: "id" });

export default function Negocios() {
  const [negocios, setNegocios] = useState([]);
  const [sortParam, setSortParam] = useState("");
  const [search, setSearch] = useState("");

  const filtro = [
    {
      value: "nombreA",
      display: "Nombre ▲",
    },
    {
      value: "nombreD",
      display: "Nombre ▼",
    },
    {
      value: "categoriaA",
      display: "Categoria ▲",
    },
    {
      value: "categoriaD",
      display: "Categoria ▼",
    },
    {
      value: "fechaA",
      display: "Fecha de registro ▲",
    },
    {
      value: "fechaD",
      display: "Fecha de registro ▼",
    },
  ];

  useEffect(() => {
    if (sortParam === "") {
      db.collection("negocios")
        .get()
        .then((response) => {
          const negociosArray = [];
          response.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            negociosArray.push(data);
          });
          setNegocios(negociosArray);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (sortParam === "nombreA") {
      dataFill("nombre", "asc");
    } else if (sortParam === "nombreD") {
      dataFill("nombre", "desc");
    } else if (sortParam === "categoriaA") {
      dataFill("categoria", "asc");
    } else if (sortParam === "categoriaD") {
      dataFill("categoria", "desc");
    } else if (sortParam === "fecha") {
      dataFill("createAt", "asc");
    } else if (sortParam === "fecha") {
      dataFill("createAt", "desc");
    }

    dataFillSearch(search);
  }, [sortParam, search]);

  const dataFill = (orderBy, order) => {
    db.collection("negocios")
      .orderBy(orderBy, order)
      .get()
      .then((response) => {
        const negocioArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          negocioArray.push(data);
        });
        setNegocios(negocioArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dataFillSearch = (search) => {
    if (search) {
      fireSQL
        .query(`SELECT * from negocios WHERE nombre LIKE '${search}%'`)
        .then((response) => {
          setNegocios(response);
        });
    }
  };

  const selectOnChange = (orderBy) => {
    setSortParam(orderBy);
  };

  const buscar = (buscarTxt) => {
    setSearch(buscarTxt);
  };

  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider
          texto="Negocios afiliados"
          padre="/negocios"
          filtro={filtro}
          isList={true}
          selectOnChange={selectOnChange}
          buscar={buscar}
        />
      </div>
      <NegocioList negocios={negocios} />
      <Footer />
    </div>
  );
}
