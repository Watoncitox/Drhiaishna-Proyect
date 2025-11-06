import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ServicioCard.css";

const ServicioCard = ({ titulo, imagen, link }) => {
  const navigate = useNavigate();

  return (
    <div className="custom-card">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <Button
        variant="outline-danger"
        className="saber-mas"
        onClick={() => navigate(link)}
      >
        Ver más detalles
      </Button>
    </div>
  );
};

export default ServicioCard;
