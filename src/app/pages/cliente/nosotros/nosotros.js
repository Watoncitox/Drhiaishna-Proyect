// src/app/pages/cliente/nosotros/nosotros.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./nosotros.css";

import GlobalCard from "../../../components/Card/Global-Card/Global-Card";
import HeroBanner from "../../../components/Hero/HeroBanner";

// Imágenes
import bastianImg from "../../../assets/img/fondo/nosotros/bastian.jpg";
import fondoNosotros from "../../../assets/img/fondo/nosotros/fondo_nosotros.png";
import dryImg from "../../../assets/img/fondo/nosotros/dry.jpg";

const equipo = [
    {
        nombre: "Bastian Sanches",
        especialidad: "Frontend Developer",
        descripcion:
            "Soy un entusiasta de la programación con un interés particular en el desarrollo web y la experiencia de usuario. Me encanta resolver problemas complejos y aprender nuevas tecnologías.",
        foto: bastianImg,
        github: "https://github.com/Watoncitox",
    },
    // Aquí más adelante puedes ir sumando otros integrantes si quieres
];

const Nosotros = () => {
    return (
        <>
            <div className="container-fluid py-5">
                <HeroBanner
                    title="Conoce a Nuestro Equipo"
                    subtitle="Profesionales dedicados a realzar tu belleza y bienestar"
                    buttonText="Ver servicios"
                    backgroundImage={fondoNosotros}
                    gradient="rgba(0, 0, 0, 0.55)"
                    textGradient="linear-gradient(90deg, #ff8dcf, #b36bff)"
                />
            </div>

            {/* Nuestra historia */}
            <section className="container my-5 text-center">
                <h2 className="fw-bold mb-4 text-secondary">Nuestra Historia</h2>
                <p className="lead text-muted">
                    Style &amp; Beauty nace del deseo de ofrecer un espacio profesional,
                    cálido y respetuoso, donde cada persona pueda cuidar su imagen
                    sintiéndose cómoda, escuchada y acompañada en todo momento.
                </p>
            </section>

            {/* Sección destacada de Dry */}
            <section className="dry-section py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={5} className="text-center mb-4 mb-md-0">
                            <img
                                src={dryImg}
                                alt="Drhiaishna Martínez - Fundadora de Style & Beauty"
                                className="dry-photo"
                            />
                        </Col>
                        <Col md={7}>
                            <h2 className="dry-title mb-3">Dry, nuestra fundadora</h2>
                            <h3 className="dry-subtitle mb-3">
                                Esteticista profesional y corazón de Style &amp; Beauty
                            </h3>
                            <p className="dry-description">
                                Drhiaishna “Dry” Martínez es la mente y el corazón detrás de
                                Style &amp; Beauty. Su objetivo siempre ha sido entregar un
                                servicio de estética responsable, personalizado y con un trato
                                cercano, donde cada detalle esté pensado en el bienestar de
                                quienes visitan la clínica.
                            </p>
                            <ul className="dry-list">
                                <li>Formación en estética profesional y actualización constante.</li>
                                <li>
                                    Enfoque en resultados naturales, priorizando la salud de la
                                    piel y el cabello.
                                </li>
                                <li>
                                    Compromiso con un ambiente respetuoso, cálido y acogedor para
                                    cada paciente.
                                </li>
                            </ul>
                            <p className="dry-quote mt-3">
                                “Más que un tratamiento, quiero que vivas una experiencia en la
                                que te sientas valorada, cuidada y escuchada en cada visita.”
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Equipo de desarrollo / soporte */}
            <Container className="my-5">
                <Row className="justify-content-center mb-4 text-center">
                    <Col>
                        <h2 className="fw-bold text-secondary">Equipo Técnico</h2>
                        <p className="text-muted">
                            Detrás de la plataforma también hay un equipo dedicado a que la
                            experiencia digital sea estable, moderna y fácil de usar.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {equipo.map((persona, index) => (
                        <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
                            <GlobalCard
                                image={persona.foto}
                                title={persona.nombre}
                                description={persona.descripcion}
                                ctaText="GitHub"
                                ctaLink={persona.github}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Nosotros;
