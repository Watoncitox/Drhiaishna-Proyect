import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Navbar.css";
import logo from "../../assets/img/logo/logo.jpg";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="floating-menu-container" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo Stile & Beauty"
            className="logo"
            height="60"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/home" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros" className="nav-link-custom">
              Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto" className="nav-link-custom">
              Contacto
            </Nav.Link>
            <Nav.Link as={NavLink} to="/inicio-sesion" className="nav-link-custom">
              Iniciar Sesión
            </Nav.Link>
            <Nav.Link as={NavLink} to="/servicios" className="nav-link-custom">
              Servicios
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
