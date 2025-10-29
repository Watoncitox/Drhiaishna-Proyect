import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../assets/img/logo/logo.jpg";
import { useAuth } from '../../context/AuthContext';

const NavbarCliente = () => {
  const { usuario } = useAuth();

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
              
              {/* 💡 ENLACE DE SERVICIOS AJUSTADO: Movido a una posición más visible para el cliente */}
              <Nav.Link as={NavLink} to="/servicios">Servicios</Nav.Link>
              
              <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
              {/* <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link> */}

              <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
              <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
              
              {usuario ? (
                <>
                  <Nav.Link as={NavLink} to="/perfil">{usuario.nombre}</Nav.Link>
                </>
              ) : (
                <Nav.Link as={NavLink} to="/inicio-sesion">Iniciar Sesión</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarCliente;
