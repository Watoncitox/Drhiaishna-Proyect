// src/pages/Nosotros/Nosotros.js
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./nosotros.css";
import GlobalCard from '../../../components/Global-Card/Global-Card';

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


      <section className="page-header">
        <h1>Nuestro Equipo de Desarrollo</h1>
        <p>Apasionados por la informática, construyendo el futuro, línea a línea.</p>
      </section>

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
