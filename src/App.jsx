import React from "react";
import "./App.css";
import CardText from "./CardText";
import Qr from "./Qr";

const paragraphTitle = {
  type: "title",
  text: "Improve your front-end skills by building projects",
};

const paragraphProps = {
  type: "paragraph",
  text: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
};

function App() {
  return (
    <div className="card-wrapper">
      <Qr />
      <CardText className="title" {...paragraphTitle} />
      <CardText className="paragraph" {...paragraphProps} />
    </div>
  );
}

export default App;
