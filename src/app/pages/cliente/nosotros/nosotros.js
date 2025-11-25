// src/pages/Nosotros/Nosotros.js
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./nosotros.css";
import GlobalCard from '../../../components/Card/Global-Card/Global-Card';
import HeroBanner from "../../../components/Hero/HeroBanner";
// Importar las imágenes
import bastianImg from "../../../assets/img/fondo/nosotros/bastian.jpg";
import fondoNosotros from "../../../assets/img/fondo/nosotros/fondo_nosotros.png";

const equipo = [
  {
    nombre: "Bastian Sanches",
    especialidad: "Frontend Developer",
    descripcion:
      "Soy un entusiasta de la programación con un interés particular en crear interfaces de usuario interactivas con HTML. Me encanta resolver problemas complejos y aprender nuevas tecnologías.",
    foto: bastianImg,
    github: "https://github.com/Watoncitox",
  },
];

const Nosotros = () => {
  return (
    <>


    <div className="container-fluid py-5">
      <HeroBanner
        title="Conoce a Nuestro Equipo"
        subtitle="Profesionales dedicados a realzar tu belleza natural"
        buttonText="Ver más"
        backgroundImage={fondoNosotros}
        gradient="rgba(0, 0, 0, 0.5)"
        textGradient="linear-gradient(90deg, #ff8dcf, #b36bff)"
      />

      <section className="container my-5 text-center">
        <h2 className="fw-bold mb-4 text-secondary">Nuestra Historia</h2>
        <p className="lead text-muted">
          Somos un equipo comprometido con tu bienestar y confianza. En nuestra clínica,
          cada tratamiento está pensado para realzar tu belleza natural con la más alta calidad.
        </p>
      </section>
    </div>

      <Container>
        <Row className="justify-content-center">
          {equipo.map((persona, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <GlobalCard
                image={persona.foto}
                title={persona.nombre}
                subtitle={persona.especialidad}
                description={persona.descripcion}
                ctaText="GitHub"
                ctaLink={persona.github}
                external
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Nosotros;
