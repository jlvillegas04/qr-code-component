import React from "react";

function CardText({ type, text }) {
  if (type === "title") {
    return <h1>{text}</h1>;
  }
  if (type === "paragraph") {
    return <p>{text}</p>;
  }
  return text;
}

export default CardText;
