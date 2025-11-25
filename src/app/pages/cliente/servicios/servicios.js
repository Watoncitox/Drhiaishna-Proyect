import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarCliente from "../../../components/Navbar/Navbar-cliente";
import ServicioCard from "../../../components/Servicios/ServicioCard";
import "./servicio.css";
import HeroBanner from "../../../components/Hero/HeroBanner";

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

         <div className="container-fluid py-5">
      <HeroBanner
        title="Nuestros Servicios"
        subtitle="Descubre los tratamientos diseñados especialmente para ti"
        buttonText="Reserva Ahora"
        backgroundImage={fondoServicio}
        gradient="rgba(0, 0, 0, 0.5)"
        textGradient="linear-gradient(90deg, #ff7ed8, #b76bff)"
      />

      <Container className="my-5">
        <Row className="g-4 justify-content-center">
          {servicios.map((s, idx) => (
            <Col xs={12} md={6} lg={4} key={idx}>
              <ServicioCard titulo={s.titulo} imagen={s.imagen} link={s.link} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>

      {/* Separador decorativo */}
      <div className="custom-separator">
        <span className="separator-text">La ciencia de sentirse bien</span>
      </div>
    </div>
  );
};

export default Servicios;
