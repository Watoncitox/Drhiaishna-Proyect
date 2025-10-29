import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../assets/img/logo/logo.jpg";
import "./Navbar.css";

const NavbarAdmin = () => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const u = JSON.parse(localStorage.getItem("usuarioActivo"));
      if (u) setUsuario(u);
    } catch (e) {}
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuarioActivo");
    setUsuario(null);
    navigate("/home");
  };

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
              <Nav.Link as={NavLink} to="/admin/productos">Productos</Nav.Link> {/* ← CRUD correcto */}
              <Nav.Link as={NavLink} to="/admin/servicios-crud">Servicios</Nav.Link>
              <Nav.Link as={NavLink} to="/admin/agenda">Agenda</Nav.Link>
              <Nav.Link as={NavLink} to="/admin/usuario">{usuario?.nombre || "Usuario"}</Nav.Link>
              <Button variant="outline-dark" size="sm" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarAdmin;
