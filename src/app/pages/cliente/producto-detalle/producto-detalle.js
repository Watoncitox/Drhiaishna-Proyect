import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { getProducto } from "../../../services/productsService";
import Flash from "../../../components/Toast";
import "./producto-detalle.css";

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
        <div className="container mt-5 pt-5 producto-detalle-page">Producto no encontrado</div>
      </>
    );
  }

  return (
    <>
      {/* Navbar provided by AppRouter via AuthContext */}
      {flash && <Flash initial={flash} />}
      <div className="container mt-5 pt-5 producto-detalle-page">
        <Card className="p-4">
          <div className="row g-4">
            <div className="col-md-5">
              {prod.imagen ? (
                <img src={prod.imagen} className="img-fluid rounded" alt={prod.nombre} />
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
              <Link to="/productos" className="btn btn-outline-secondary ms-2">
                Volver
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
