import React from "react";
import NavbarBase from "./NavbarBase";

export default function NavbarAdmin() {
  const links = [
    { to: "/home-admin", label: "Inicio" },
    { to: "/clientes", label: "Clientes" },
    { to: "/productos-crud", label: "Productos" },
    { to: "/servicios-crud", label: "Servicios" },
    { to: "/agenda", label: "Agenda" },
    { to: "/usuario", label: "Usuarios" },
  ];

  return <NavbarBase links={links} brandColor="dark" />;
}
