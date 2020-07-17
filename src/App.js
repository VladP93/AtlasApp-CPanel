import React, { useEffect } from "react";
import "./App.css";
import { firebaseApp } from "./utils/firebase";
import * as firebase from "firebase";

import Router from "./Router";

function App() {
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //   });
  // }, []);

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
