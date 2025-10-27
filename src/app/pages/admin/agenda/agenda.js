import React, { useEffect, useMemo, useState } from "react";
import NavbarAdmin from "../../../components/Navbar/Navbar-admin";
import { Card, Row, Col, Button, ListGroup, Badge } from "react-bootstrap";
import { listCitas } from "../../../services/appointmentsService";

function firstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function daysInMonth(y, m) {
  return new Date(y, m + 1, 0).getDate();
}

export default function AgendaAdmin() {
  const [fecha, setFecha] = useState(new Date());
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    setCitas(listCitas());
  }, []);

  const grid = useMemo(() => {
    const start = firstDayOfMonth(fecha);
    const total = daysInMonth(fecha.getFullYear(), fecha.getMonth());
    const arr = [];
    for (let i = 1; i <= total; i++) {
      const d = new Date(fecha.getFullYear(), fecha.getMonth(), i);
      const dayKey = d.toDateString();
      const delDia = citas.filter((c) => new Date(c.fechaHora).toDateString() === dayKey);
      arr.push({ d, citas: delDia });
    }
    return arr;
  }, [fecha, citas]);

  const diasCon = grid.filter((x) => x.citas.length > 0).map((x) => x.d.getDate());
  const diasLibres = grid.filter((x) => x.citas.length === 0).map((x) => x.d.getDate());

  return (
    <>
      <NavbarAdmin />
      <div className="container mt-5 pt-5 agenda-page">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Agenda</h2>
          <div>
            <Button
              variant="outline-secondary"
              className="me-2"
              onClick={() => setFecha(new Date(fecha.getFullYear(), fecha.getMonth() - 1, 1))}
            >
              ◀
            </Button>
            <strong>{fecha.toLocaleString("es-CL", { month: "long", year: "numeric" })}</strong>
            <Button
              variant="outline-secondary"
              className="ms-2"
              onClick={() => setFecha(new Date(fecha.getFullYear(), fecha.getMonth() + 1, 1))}
            >
              ▶
            </Button>
          </div>
        </div>

        <Row xs={2} md={4} lg={7} className="g-2">
          {grid.map(({ d, citas }) => (
            <Col key={d.toISOString()}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    {d.getDate()}{" "}
                    {citas.length > 0 ? (
                      <Badge bg="warning">{citas.length} citas</Badge>
                    ) : (
                      <Badge bg="success">Libre</Badge>
                    )}
                  </Card.Title>
                  <ListGroup variant="flush">
                    {citas.slice(0, 3).map((c) => (
                      <ListGroup.Item key={c.id} className="py-1 small">
                        {new Date(c.fechaHora).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        {" — "}
                        {c.cliente}
                      </ListGroup.Item>
                    ))}
                    {citas.length > 3 && (
                      <ListGroup.Item className="small text-muted">
                        +{citas.length - 3} más...
                      </ListGroup.Item>
                    )}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            <Card>
              <Card.Header>Días con clientas</Card.Header>
              <Card.Body>
                {diasCon.length ? diasCon.join(", ") : <span className="text-muted">N/A</span>}
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>Días libres</Card.Header>
              <Card.Body>
                {diasLibres.length ? diasLibres.join(", ") : <span className="text-muted">N/A</span>}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
