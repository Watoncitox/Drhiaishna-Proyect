import React from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import NavbarCliente from "../../../../components/Navbar/Navbar-cliente";
import HeroBanner from "../../../../components/Hero/HeroBanner";
import "../kerastase/kerastase.css";
import { useCart } from "../../../../hooks/useCart";

import lorealImg from "../../../../assets/img/fondo/Productos/loreal.jpg";

const mockProductos = {
  1: {
    id: 1,
    nombre: "Champú L'Oréal Professionnel",
    img: lorealImg,
    precio: 19990,
    descripcion: "Champú profesional para todo tipo de cabellos, con tecnología reparadora.",
    beneficios: [
      "Limpieza suave y equilibrada",
      "Mejora la textura y el brillo",
      "Protección del color",
    ],
  },
};

const Loreal = () => {
  const { id } = useParams();
  const producto = mockProductos[id] || mockProductos[1];
  const { addToCart } = useCart();

  return (
    <div className="background-detalle">
      <NavbarCliente />

      <div className="page-hero container-fluid py-5">
        <HeroBanner
          title="L'Oréal Professionnel"
          subtitle="Productos profesionales para el cuidado del cabello"
          backgroundImage={lorealImg}
          showButton={false}
        />
      </div>

      <Container className="detalle-container">
        <Row className="align-items-center">
          <Col md={6}>
            <div className="img-frame">
              <img src={producto.img} alt={producto.nombre} className="detalle-img" />
            </div>
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

            <Button variant="danger" className="btn-add" onClick={() => addToCart(producto)}>
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

export default Loreal;
