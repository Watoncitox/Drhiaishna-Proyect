import React from "react";
import { Container, Button } from "react-bootstrap";
import NavbarCliente from "../../../../components/Navbar/Navbar-cliente";
import { useNavigate } from "react-router-dom";
import "./cosmetologia.css";

const Cosmetologia = () => {
  const navigate = useNavigate();

  return (
    <div className="background-gradient">
      <NavbarCliente />
      <Container className="py-5 mt-5 text-center">
        <h1 className="mb-4 text-danger fw-bold">Cosmetología</h1>
        <p className="lead mb-4">
          En DYB ofrecemos tratamientos faciales, limpieza profunda, hidratación,
          exfoliación y terapias de rejuvenecimiento, adaptadas a cada tipo de piel.
          Nuestros profesionales te ayudarán a mantener tu piel sana, luminosa y radiante.
        </p>
        <Button
          variant="outline-danger"
          className="agendar-btn"
          onClick={() => navigate("/agendar-hora")}
        >
          <i className="bi bi-calendar2-check"></i> Agendar Hora
        </Button>
      </Container>
    </div>
  );
};

export default Cosmetologia;
