import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import logo from "../../assets/img/logo/logo.jpg";
import "./Navbar.css";
import { useAuth } from '../../context/AuthContext';

const NavbarAdmin = () => {
  const { usuario } = useAuth();

  return (
    <div className="floating-menu-container">
      <Navbar expand="lg" className="app-navbar shadow-sm rounded-pill px-4 py-2" style={{ maxWidth: "1200px" }}>
        <Container fluid className="d-flex align-items-center justify-content-between">
          <Navbar.Brand as={NavLink} to="/admin/home-admin" className="d-flex align-items-center text-decoration-none">
            <img src={logo} alt="Logo" className="logo rounded-3 me-2" />
            <span className="fw-bold text-danger">Panel Admin</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="admin-navbar" />
          <Navbar.Collapse id="admin-navbar">
            <Nav className="ms-auto d-flex align-items-center gap-3">
              <Nav.Link as={NavLink} to="/admin/home-admin">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/admin/clientes">Clientes</Nav.Link>
              <Nav.Link as={NavLink} to="/admin/productos">Productos</Nav.Link>
              <Nav.Link as={NavLink} to="/admin/servicios-crud">Servicios</Nav.Link>
              <Nav.Link as={NavLink} to="/admin/agenda">Agenda</Nav.Link>
              {/* Mostrar rol del usuario como badge y luego su nombre */}
              <div className="d-flex align-items-center gap-2">
                <Nav.Link as={NavLink} to="/admin/usuario">{usuario?.nombre || "Usuario"}</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarAdmin;
