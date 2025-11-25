import React from "react";
import HeroBanner from "../../../components/Hero/HeroBanner";
import fondoAgenda from "../../../assets/img/fondo/peluqueria/1.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function AgendarHora() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tu cita ha sido registrada con éxito 💅");
  };

  return (
    <div className="container-fluid py-5">
      <HeroBanner
        title="Agenda tu Hora"
        subtitle="Reserva el momento perfecto para ti"
        buttonText="Reservar"
        backgroundImage={fondoAgenda}
        gradient="rgba(0, 0, 0, 0.55)"
        textGradient="linear-gradient(90deg, #ff92d8, #b46bff)"
      />

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Servicio</Form.Label>
                <Form.Select required>
                  <option>Seleccione un servicio</option>
                  <option>Tratamiento Capilar</option>
                  <option>Limpieza Facial</option>
                  <option>Botox Capilar</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Fecha y Hora</Form.Label>
                <Form.Control type="datetime-local" required />
              </Form.Group>

              <Button variant="outline-danger" type="submit" className="rounded-pill w-100">
                Confirmar Reserva
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
