import React from "react";
import "../../../components/Navbar/Navbar.css";
import HeroBanner from "../../../components/Hero/HeroBanner";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import fondoContacto from "../../../assets/img/fondo/fondo.jpg";

const Contacto = () => {
    return (
    <div className="container-fluid py-5">
      <HeroBanner
        title="Contáctanos"
        subtitle="Queremos escucharte y ayudarte a verte mejor cada día"
        buttonText="Enviar Mensaje"
        backgroundImage={fondoContacto}
        gradient="rgba(0, 0, 0, 0.6)"
        textGradient="linear-gradient(90deg, #f77aff, #b76bff)"
      />

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Tu nombre completo" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Cuéntanos cómo podemos ayudarte" />
              </Form.Group>

              <Button variant="outline-danger" className="rounded-pill px-4">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;
