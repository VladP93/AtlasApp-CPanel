import React from "react";

export default function Footer(props) {
  const { fixed } = props;
  var footerClassName = "";

  if (fixed) {
    footerClassName = "navbar fixed-bottom";
  }

  return (
    <footer className={footerClassName} id="footer">
      <div className="center">
        <p>&copy; AtlasApp</p>
      </div>
    </footer>
  );
}
