import React from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import NavbarCliente from "../../../components/Navbar/Navbar-cliente";
import { useCart } from "../../../hooks/useCart";
import "./producto-detalle.css";

// Puedes reemplazar esto con un JSON real más adelante
import kerastaseImg from "../../../assets/img/fondo/Productos/kerastase.jpg";

const mockProductos = {
  1: {
    id: 1,
    nombre: "Shampoo Kerastase Nutritive",
    img: kerastaseImg,
    precio: 24990,
    descripcion:
      "Shampoo nutritivo premium diseñado para cabellos secos, opacos y sin vida.",
    beneficios: [
      "Nutre profundamente la fibra capilar",
      "Hidrata sin dejar pesado",
      "Restaura suavidad y brillo",
      "Fórmula premium rica en lípidos"
    ],
  }
};

const ProductoDetalle = () => {
  const { id } = useParams();
  const producto = mockProductos[id];
  const { addToCart } = useCart();

  return (
    <div className="background-detalle">
      <NavbarCliente />

      <Container className="detalle-container">
        <Row className="align-items-center">
          <Col md={6}>
            <img src={producto.img} alt={producto.nombre} className="detalle-img" />
          </Col>

          <Col md={6}>
            <h1 className="detalle-title">{producto.nombre}</h1>
            <p className="detalle-descripcion">{producto.descripcion}</p>

            <h4 className="detalle-sub">Beneficios</h4>
            <ul className="detalle-list">
              {producto.beneficios.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <h3 className="precio">${producto.precio}</h3>

            <Button
              variant="danger"
              className="btn-add"
              onClick={() => addToCart(producto)}
            >
              Agregar al carrito
            </Button>

            <Button variant="success" className="btn-buy">
              Comprar ahora
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductoDetalle;
