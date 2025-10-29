import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./home-cliente.css";
import { useAuth } from '../../../context/AuthContext';
// Importar componentes de Bootstrap
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

// Importa tus recursos multimedia
import videoFondo from "../../../assets/video/video.mp4";
import dryImg from "../../../assets/img/fondo/dry/presentacion.jpg";
import iaImg from "../../../assets/img/fondo/nosotros/ia.png";

function HomeCliente() {
  const navigate = useNavigate();
  const { usuario, logout, notify } = useAuth();

  // Función del botón "Agenda tu hora"
  const agendar = () => {
    navigate("/agendar-hora");
  };

  // Función de logout (si se necesita aquí)
  const cerrarSesion = () => {
    logout();
    notify({ title: 'Sesión', body: 'Sesión cerrada correctamente', variant: 'warning' });
  };

  return (
    <div className="background-gradient">

      {/* ===== Hero principal ===== */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-bg">
          <source src={videoFondo} type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <h1 className="hero-title">
            Bienvenida a <span className="highlight">Nuestra Clínica Estética</span>
          </h1>
          <p className="hero-subtitle">
            Cuidamos tu <strong>belleza</strong> y <strong>bienestar</strong>
          </p>
          <button className="cta-btn" onClick={agendar}>
            <span>📅</span> Agenda tu Hora
          </button>
        </div>
      </section>

      {/* ===== Contenido Principal ===== */}
      <main>
        {/* Sobre Nosotros */}
        <section id="sobre-nosotros" className="about-section">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="text-center">
                <img
                  src={iaImg}
                  alt="Drhiaishna Martínez Miranda"
                  className="about-img img-fluid rounded shadow"
                />
              </Col>
              <Col md={6}>
                <h2 className="mb-4">Sobre Nosotros</h2>
                <p className="lead">
                  En <strong>Stile & Beauty</strong> creemos que la belleza es el
                  reflejo del cuidado y la dedicación. Nuestro proyecto nace de la
                  unión entre <strong>Drhiaishna Martínez Miranda</strong> y nuestro
                  equipo de TI conformado por:{" "}
                  <strong>
                    Bastian Sanches, Matias Diaz y Elias Delgado
                  </strong>.
                </p>
                <p>
                  Drhiaishna aporta la experiencia y pasión en el área de la
                  estética, mientras que nosotros, como Ingenieros en Informática,
                  respaldamos con apoyo tecnológico y estratégico en cada etapa de
                  este proyecto.
                </p>
                <p>
                  Nuestro sueño en conjunto es ofrecer un centro de estética integral
                  que combine profesionalismo, calidad y valores sólidos, donde cada
                  persona se sienta única, cuidada y valorada.
                </p>
                <div className="mt-4">
                  <Button 
                    as={Link} 
                    to="/nosotros" 
                    variant="primary" 
                    size="lg"
                    className="cta-btn"
                  >
                    Conócenos Más
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <div className="custom-separator">
          <span className="separator-text">La ciencia de sentirse bien</span>
        </div>

        {/* Drhiaishna */}
        <section id="drhiaishna" className="about-section">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="order-md-2 text-center">
                <img
                  src={dryImg}
                  alt="Drhiaishna Martínez Miranda"
                  className="about-img img-fluid rounded shadow"
                />
              </Col>
              <Col md={6} className="order-md-1">
                <h2 className="mb-4">Drhiaishna Martínez Miranda</h2>
              <p>
                Drhiaishna es una profesional apasionada por la estética,
                actualmente egresada de la carrera de{" "}
                <strong>Estética Profesional en AIEP</strong>.
              </p>
              <p>
                Cuenta con formación especializada en{" "}
                <strong>tratamientos capilares</strong> (alisado permanente, botox
                capilar) y con más de un año de experiencia en la prestigiosa
                peluquería <em>“MARTIN C”</em> en Vitacura.
              </p>
                <p>En sus servicios particulares ofrece:</p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="text-primary me-2">✨</span>
                    <strong>Tratamientos capilares:</strong> alisados permanentes y
                    botox capilar.
                  </li>
                  <li className="mb-2">
                    <span className="text-primary me-2">✨</span>
                    <strong>Masoterapia:</strong> masajes descontracturantes,
                    relajantes, reductivos y post-operatorios.
                  </li>
                  <li className="mb-2">
                    <span className="text-primary me-2">✨</span>
                    <strong>Estilismo y color:</strong> cortes femeninos y
                    masculinos, tinturas completas, balayage y mechas.
                  </li>
                  <li className="mb-2">
                    <span className="text-primary me-2">✨</span>
                    <strong>Maquillaje profesional:</strong> para toda ocasión.
                  </li>
                  <li className="mb-2">
                    <span className="text-primary me-2">✨</span>
                    <strong>Manicure y pedicure:</strong> aplicación de Soft Gel y
                    acrílico.
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
}

export default HomeCliente;
