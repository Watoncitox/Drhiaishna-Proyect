import React from "react";
import NavbarBase from "./NavbarBase";

export default function NavbarCliente() {
  const links = [
    { to: "/home", label: "Inicio" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/servicios", label: "Servicios" },
    { to: "/contacto", label: "Contacto" },
    { to: "/productos", label: "Productos" },
    { to: "/agendar-hora", label: "Agendar Hora" },
    { to: "/perfil", label: "Mi Cuenta" },
    { to: "/carrito", label: "Carrito" },
  ];

  return <NavbarBase links={links} brandColor="danger" />;
}
