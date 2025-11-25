import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MarcaCard.css";

const MarcaCard = ({ titulo, imagen, descripcion, beneficios, parrafos, reverse }) => {
  return (
    <section className="about-section">
      <div
        className={`about-content ${reverse ? "flex-row-reverse" : ""}`}
        data-aos="fade-up"
      >
        <div className="about-img-container">
          <img src={imagen} alt={titulo} className="about-img" />
        </div>
        <div className="about-info">
          <h2>{titulo}</h2>

          {descripcion && <p>{descripcion}</p>}

          {parrafos?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {beneficios && beneficios.length > 0 && (
            <>
              <strong>Beneficios de {titulo}:</strong>
              <ul>
                {beneficios.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MarcaCard;
