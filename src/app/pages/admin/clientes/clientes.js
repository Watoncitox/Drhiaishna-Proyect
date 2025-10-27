import React, { useEffect, useMemo, useState } from "react";
import NavbarAdmin from "../../../components/Navbar/Navbar-admin";
import { Table, Button, ButtonGroup, Badge } from "react-bootstrap";
import { listCitas, actualizarEstado } from "../../../services/appointmentsService";

function inNextDays(dateIso, days) {
  const now = new Date();
  const d = new Date(dateIso);
  const diff = (d - now) / (1000 * 60 * 60 * 24);
  return diff >= 0 && diff <= days;
}

export default function ClientesAdmin() {
  const [citas, setCitas] = useState([]);
  const [filtro, setFiltro] = useState("hoy"); // 'hoy' | 'proximos3'

  useEffect(() => {
    setCitas(listCitas());
  }, []);

  const filtradas = useMemo(() => {
    const now = new Date();
    const start = new Date(now); start.setHours(0,0,0,0);
    const end = new Date(now); end.setHours(23,59,59,999);

    return citas.filter((c) => {
      const t = new Date(c.fechaHora);
      if (filtro === "hoy") return t >= start && t <= end;
      return inNextDays(c.fechaHora, 3);
    });
  }, [citas, filtro]);

  const onEstado = (id, estado) => {
    actualizarEstado(id, estado);
    setCitas(listCitas());
  };

  return (
    <>
      <NavbarAdmin />
      <div className="container mt-5 pt-5 clientes-page">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Clientes agendados</h2>
          <ButtonGroup>
            <Button
              variant={filtro === "hoy" ? "primary" : "outline-primary"}
              onClick={() => setFiltro("hoy")}
            >
              Hoy
            </Button>
            <Button
              variant={filtro === "proximos3" ? "primary" : "outline-primary"}
              onClick={() => setFiltro("proximos3")}
            >
              Próx. 3 días
            </Button>
          </ButtonGroup>
        </div>

        <Table bordered hover responsive>
          <thead className="table-light">
            <tr>
              <th>Cliente</th>
              <th>Servicio</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Estado</th>
              <th className="text-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtradas.map((c) => {
              const dt = new Date(c.fechaHora);
              return (
                <tr key={c.id}>
                  <td>{c.cliente}</td>
                  <td>{c.servicio}</td>
                  <td>{dt.toLocaleDateString()}</td>
                  <td>{dt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</td>
                  <td>
                    <Badge
                      bg={
                        c.estado === "confirmado"
                          ? "success"
                          : c.estado === "cancelado"
                          ? "danger"
                          : "secondary"
                      }
                    >
                      {c.estado}
                    </Badge>
                  </td>
                  <td className="text-end">
                    <Button
                      size="sm"
                      className="me-2"
                      variant="success"
                      onClick={() => onEstado(c.id, "confirmado")}
                    >
                      Confirmar
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => onEstado(c.id, "cancelado")}
                    >
                      Cancelar
                    </Button>
                  </td>
                </tr>
              );
            })}
            {filtradas.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  Sin registros para el filtro seleccionado
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}
