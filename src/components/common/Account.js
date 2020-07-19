import React from "react";
import * as firebase from "firebase";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

export default function Account() {
  const user = firebase.auth().currentUser;
  if (!user) {
    Swal.fire("No puedes hacer eso :) ");
    return <Redirect to={"/"} />;
  }
  return <div></div>;
}
