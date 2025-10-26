import React, { useEffect, useState } from "react";
import NavbarCliente from "../../../components/Navbar/Navbar-cliente";
import { Card, Button, Row, Col } from "react-bootstrap";
import { getProductos } from "../../../services/productsService";
import Flash from "../../../components/Toast";

export default function ProductosCliente() {
  const [productos, setProductos] = useState([]);
  const [flash, setFlash] = useState("");

  useEffect(() => {
    setProductos(getProductos());
  }, []);

  const agregar = (p) => {
    // Dejar pre-cargado para el componente de Carrito (Matías)
    const current = JSON.parse(localStorage.getItem("carritoPending") || "[]");
    localStorage.setItem("carritoPending", JSON.stringify([...current, { tipo: "producto", id: p.id, nombre: p.nombre, precio: p.precio, qty: 1 }]));
    setFlash(`"${p.nombre}" agregado (pendiente de Carrito)`);
    setTimeout(()=>setFlash(""), 2600);
  };

  return (
    <>
      <NavbarCliente />
      {flash && <Flash initial={flash} />}
      <div className="container mt-5 pt-5">
        <h2 className="mb-4">Productos</h2>
        <Row xs={1} md={3} className="g-4">
          {productos.map(p => (
            <Col key={p.id}>
              <Card className="h-100">
                {p.imagen && <Card.Img variant="top" src={p.imagen} alt={p.nombre} />}
                <Card.Body>
                  <Card.Title>{p.nombre}</Card.Title>
                  <Card.Text className="small text-muted">{p.descripcion}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <strong>${p.precio.toLocaleString("es-CL")}</strong>
                    <div>
                      <Button size="sm" variant="outline-secondary" href={`/producto/${p.id}`} className="me-2">Detalles</Button>
                      <Button size="sm" onClick={() => agregar(p)}>Agregar</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}
