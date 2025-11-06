import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavbarCliente from "../../../components/Navbar/Navbar-cliente";
import ServicioCard from "../../../components/Servicios/ServicioCard";
import "./servicio.css";

// ✅ Importa las imágenes directamente
import fondoServicio from "../../../assets/img/fondo/servicios/fondo_servicio.png";
import cosmetologiaImg from "../../../assets/img/fondo/servicios/1.png";
import manicurePedicureImg from "../../../assets/img/fondo/servicios/2.png";
import maquillajeImg from "../../../assets/img/fondo/servicios/3.png";
import tratamientosCorporalImg from "../../../assets/img/fondo/servicios/4.png";
import peluqueriaImg from "../../../assets/img/fondo/servicios/6.png";
import tratamientosCapilaresImg from "../../../assets/img/fondo/servicios/5.png";

const Servicios = () => {
  const servicios = [
    {
      titulo: "Cosmetología",
      imagen: cosmetologiaImg,
      link: "/servicios/cosmetologia",
    },
    {
      titulo: "Manicure y pedicure",
      imagen: manicurePedicureImg,
      link: "/servicios/manicure-pedicure",
    },
    {
      titulo: "Maquillaje Profesional",
      imagen: maquillajeImg,
      link: "/servicios/maquillaje-profesional",
    },
    {
      titulo: "Tratamientos Corporales y Spa",
      imagen: tratamientosCorporalImg,
      link: "/servicios/tratamientos-corporales",
    },
    {
      titulo: "Corte, estilismo y color",
      imagen: peluqueriaImg,
      link: "/servicios/peluqueria",
    },
    {
      titulo: "Tratamientos capilares",
      imagen: tratamientosCapilaresImg,
      link: "/servicios/tratamientos-capilares",
    },
  ];

  const agendar = () => {
    alert("Aquí podrías redirigir al formulario de reservas o agenda-hora");
  };

  return (
    <div className="background-gradient">
      <NavbarCliente />

      {/* Hero Section */}
      <section className="hero-section text-center">
        <img src={fondoServicio} alt="Fondo Servicios" className="hero-bg" />
        <div className="hero-overlay">
          <h1 className="hero-title">
            DYB <span className="highlight">Servicios</span>
          </h1>
          <Button className="cta-btn mt-3" onClick={agendar}>
            <i className="bi bi-calendar2-check"></i> Agenda tu Hora
          </Button>
        </div>
      </section>

      {/* Grid de Servicios */}
      <Container className="card-grid py-5">
        <Row xs={1} sm={2} md={3} className="g-5">
          {servicios.map((serv, i) => (
            <Col key={i}>
              <ServicioCard
                titulo={serv.titulo}
                imagen={serv.imagen}
                link={serv.link}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Separador decorativo */}
      <div className="custom-separator">
        <span className="separator-text">La ciencia de sentirse bien</span>
      </div>
    </div>
  );
};

export default Servicios;
