// src/pages/Nosotros/Nosotros.js
import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from "../../../components/Navbar/Navbar";
import "./nosotros.css";

// Importar las imágenes
import matiasImg from "../../../assets/img/fondo/nosotros/matias.jpg";
import bastianImg from "../../../assets/img/fondo/nosotros/bastian.jpg";
import eliasImg from "../../../assets/img/fondo/nosotros/Foto_de_perfil_formal.jpg";

const equipo = [
  {
    nombre: "Matias Diaz",
    especialidad: "Backend Developer",
    descripcion:
      "Mi pasión radica en la lógica del lado del servidor y la gestión de bases de datos. Disfruto optimizando el rendimiento y asegurando la robustez de las aplicaciones.",
    foto: matiasImg,
    github: "https://github.com/Na1kox-AFK",
  },
  {
    nombre: "Bastian Sanches",
    especialidad: "Frontend Developer",
    descripcion:
      "Soy un entusiasta de la programación con un interés particular en crear interfaces de usuario interactivas con HTML. Me encanta resolver problemas complejos y aprender nuevas tecnologías.",
    foto: bastianImg,
    github: "https://github.com/Watoncitox",
  },
  {
    nombre: "Elias Delgado",
    especialidad: "Data Scientist",
    descripcion:
      "Me fascinan los datos y cómo pueden contar historias. Mi objetivo es extraer información valiosa para tomar decisiones inteligentes y construir modelos predictivos.",
    foto: eliasImg,
    github: "https://github.com/ChicoElias",
  },
];

const Nosotros = () => {
  return (
    <>
      <Navbar />

      <section className="page-header">
        <h1>Nuestro Equipo de Desarrollo</h1>
        <p>Apasionados por la informática, construyendo el futuro, línea a línea.</p>
      </section>

      <Container>
        <Row className="justify-content-center">
          {equipo.map((persona, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <Card className="team-member h-100 shadow-sm">
                <div className="member-photo text-center">
                  <Card.Img 
                    variant="top" 
                    src={persona.foto} 
                    alt={`Foto de ${persona.nombre}`}
                    className="rounded-circle mx-auto mt-4"
                    style={{width: '150px', height: '150px', objectFit: 'cover'}}
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title as="h2" className="mb-2">{persona.nombre}</Card.Title>
                  <Card.Subtitle as="h3" className="mb-3 text-muted">
                    {persona.especialidad}
                  </Card.Subtitle>
                  <Card.Text className="mb-4">
                    {persona.descripcion}
                  </Card.Text>
                  <div className="social-links">
                    <a 
                      href={persona.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn btn-outline-primary"
                    >
                      <i className="fab fa-github me-2"></i>GitHub
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Nosotros;
