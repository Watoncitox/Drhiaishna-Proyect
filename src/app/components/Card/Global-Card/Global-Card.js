import React from "react";
import CardBase from "../CardBase";
import "./Global-Card.css";

export default function GlobalCard({ image, title, description, ctaText, ctaLink }) {
  return (
    <CardBase
      image={image}
      title={title}
      text={description}
      buttonText={ctaText}
      onButtonClick={() => window.open(ctaLink, "_blank")}
      variant="outline-dark"
      className="global-card"
    />
  );
}
