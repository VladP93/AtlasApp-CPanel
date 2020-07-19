import React from "react";
import * as firebase from "firebase";
import { Redirect } from "react-router-dom";

export default function Logout() {
  firebase.auth().signOut();

  return (
    <div>
      <Redirect to={"/"} />
    </div>
  );
}
