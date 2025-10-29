import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// NavbarAdmin is provided globally by App.js when the user is admin.
import "./home-admin.css";

// Imágenes desde assets
import fondoServicio from "../../../assets/img/fondo/servicios/fondo_servicio.png";
import clientesImg from "../../../assets/img/fondo/servicios/clientes.png";
import usuarioIcon from "../../../assets/img/logo/facelogo.png";

const HomeAdmin = () => {
  const cards = [
    {
      title: "Servicios",
      text: "Agrega, edita o elimina los servicios ofrecidos en la clínica.",
      image: fondoServicio,
      link: "/admin/servicios-crud",
      button: "Gestionar Servicios",
    },
    {
      title: "Clientes",
      text: "Consulta la lista completa de clientes y su información.",
      image: clientesImg,
      link: "/admin/clientes",
      button: "Ver Clientes",
    },
    // Descomenta si deseas incluir la opción RRSS o usuario
    // {
    //   title: "RRSS",
    //   text: "Edita la información de tu cuenta de administrador.",
    //   image: usuarioIcon,
    //   link: "/usuario",
    //   button: "Configurar Perfil",
    // },
  ];

  return (
    <>
      <main className="home-admin-background min-vh-100 d-flex flex-column align-items-center justify-content-start">
        <section className="text-center mb-5 mt-5 pt-4">
          <h1 className="fw-bold display-5 text-danger mb-2 animate-fade">
            Panel de Administración
          </h1>
          <p className="fs-5 text-secondary animate-fade-delayed">
            Gestiona tu clínica estética desde un solo lugar
          </p>
        </section>

        <Container>
          <Row className="g-4 justify-content-center">
            {cards.map((card, idx) => (
              <Col key={idx} md={4} sm={6} data-aos="fade-up">
                <Card className="admin-card h-100 text-center border-0">
                  <Card.Img
                    variant="top"
                    src={card.image}
                    className="admin-card-img"
                  />
                  <Card.Body>
                    <Card.Title className="text-danger fw-bold fs-4 mb-2">
                      {card.title}
                    </Card.Title>
                    <Card.Text className="text-secondary mb-4">
                      {card.text}
                    </Card.Text>
                    <NavLink to={card.link}>
                      <Button
                        variant="outline-danger"
                        className="rounded-pill px-4 fw-semibold"
                      >
                        {card.button}
                      </Button>
                    </NavLink>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
};

export default HomeAdmin;
