import React, { useState, useEffect } from "react";

import { firebaseApp } from "../../utils/firebase";
import { FireSQL } from "firesql";
import firebase from "firebase/app";
import "firebase/firestore";

import Header from "../common/Header";
import Slider from "../common/Slider";
import Footer from "../common/Footer";
import CategoriaList from "../forms/CategoriaList";

const db = firebase.firestore(firebaseApp);
const fireSQL = new FireSQL(firebase.firestore(), { includeId: "id" });

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [sortParam, setSortParam] = useState("");
  const [search, setSearch] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (sortParam === "") {
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
          console.log(err);
        });
    } else if (sortParam === "categoriaA") {
      dataFill("categoria", "asc");
    } else if (sortParam === "categoriaD") {
      dataFill("categoria", "desc");
    }

    setReload(false);
    dataFillSearch(search);
  }, [sortParam, search, reload]);

  const filtro = [
    {
      value: "categoriaA",
      display: "Categoría ▲",
    },
    {
      value: "categoriaD",
      display: "Categoria ▼",
    },
  ];

  const dataFill = (orderBy, order) => {
    db.collection("categorias")
      .orderBy(orderBy, order)
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
        console.log(err);
      });
  };

  const dataFillSearch = (search) => {
    if (search) {
      fireSQL
        .query(`SELECT * from categorias WHERE categoria LIKE '${search}%'`)
        .then((response) => {
          setCategorias(response);
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
          texto="Categorías actuales"
          padre="/categorias"
          filtro={filtro}
          isList={true}
          selectOnChange={selectOnChange}
          buscar={buscar}
        />
        <CategoriaList categorias={categorias} setReload={setReload} />
      </div>
      <Footer />
    </div>
  );
}
