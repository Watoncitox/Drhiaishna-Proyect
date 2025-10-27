import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarCliente from "../../../components/Navbar/Navbar-cliente";
import { Card, Button } from "react-bootstrap";
import { getProducto } from "../../../services/productsService";
import Flash from "../../../components/Toast";

export default function ProductoDetalle() {
  const { id } = useParams();
  const [prod, setProd] = useState(null);
  const [flash, setFlash] = useState("");

  useEffect(() => {
    setProd(getProducto(id));
  }, [id]);

  const agregar = () => {
    const current = JSON.parse(localStorage.getItem("carritoPending") || "[]");
    localStorage.setItem(
      "carritoPending",
      JSON.stringify([
        ...current,
        { tipo: "producto", id: prod.id, nombre: prod.nombre, precio: prod.precio, qty: 1 },
      ])
    );
    setFlash(`"${prod.nombre}" agregado (pendiente de Carrito)`);
    setTimeout(() => setFlash(""), 2600);
  };

  if (!prod) {
    return (
      <>
        <NavbarCliente />
        <div className="container mt-5 pt-5 producto-detalle-page">
          Producto no encontrado
        </div>
      </>
    );
  }

  return (
    <>
      <NavbarCliente />
      {flash && <Flash initial={flash} />}
      <div className="container mt-5 pt-5 producto-detalle-page">
        <Card className="p-4">
          <div className="row g-4">
            <div className="col-md-5">
              {prod.imagen ? (
                <img
                  src={prod.imagen}
                  className="img-fluid rounded"
                  alt={prod.nombre}
                />
              ) : (
                <div className="bg-light rounded" style={{ height: 240 }} />
              )}
            </div>
            <div className="col-md-7">
              <h3>{prod.nombre}</h3>
              <p className="text-muted">{prod.descripcion}</p>
              <h4 className="mb-3">
                ${Number(prod.precio || 0).toLocaleString("es-CL")}
              </h4>
              <Button onClick={agregar}>Agregar</Button>
              <Button
                variant="outline-secondary"
                className="ms-2"
                href="/productos"
              >
                Volver
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
