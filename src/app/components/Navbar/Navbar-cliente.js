import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../assets/img/logo/logo.jpg";

const NavbarCliente = ({ usuarioActivo }) => {
  const [activo, setActivo] = useState(usuarioActivo);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("usuarioActivo"));
    if (data) setActivo(data);
  }, [usuarioActivo]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("usuarioActivo");
    setActivo(null);
    navigate("/home");
  };

  return (
    <div className="floating-menu-container">
      <Navbar expand="lg" className="app-navbar shadow-sm rounded-pill px-4 py-2" style={{ maxWidth: "1200px" }}>
        <Container fluid className="d-flex align-items-center justify-content-between">
          <Navbar.Brand as={NavLink} to="/home" className="d-flex align-items-center text-decoration-none">
            <img src={logo} alt="Logo" className="logo rounded-3 me-2" />
            <span className="fw-bold text-danger">Stile & Beauty</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="cliente-navbar" />
          <Navbar.Collapse id="cliente-navbar">
            <Nav className="ms-auto d-flex align-items-center gap-3">
              <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
              <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
              {activo ? (
                <>
                  <Nav.Link as={NavLink} to="/perfil">{activo.nombre}</Nav.Link>
                </>
              ) : (
                <Nav.Link as={NavLink} to="/inicio-sesion">Iniciar Sesión</Nav.Link>
              )}
              <Nav.Link as={NavLink} to="/servicios">Servicios</Nav.Link>
              <Nav.Link as={NavLink} to="/productos-detalle">Productos</Nav.Link>
              <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarCliente;
