import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTACIONES DE BARRAS DE NAVEGACIÓN
import NavbarCliente from "./app/components/Navbar/Navbar-cliente";
import NavbarAdmin from "./app/components/Navbar/Navbar-admin";     

// Importaciones de Vistas y Componentes existentes
import HomeCliente from "./app/pages/cliente/home-cliente/home-cliente";
import HomeAdmin from "./app/pages/admin/home-admin/home-admin";
import RequireAdmin from "./app/components/Auth/RequireAdmin";
import Contacto from "./app/pages/cliente/contacto/contacto";
import Nosotros from "./app/pages/cliente/nosotros/nosotros";
import InicioSesion from "./app/pages/inicio-sesion/inicio-sesion";

// ELÍAS DELGADO // IMPORTS DE LAS VISTAS:
import ClientesAdmin from "./app/pages/admin/clientes/clientes";
import AgendaAdmin from "./app/pages/admin/agenda/agenda";
import ProductosCRUD from "./app/pages/admin/productos-crud/productos-crud";
import ServiciosCRUD from "./app/pages/admin/servicios-crud/servicios-crud";
import UsuarioAdmin from "./app/pages/admin/usuario-admin/usuario-admin";
import ProductosCliente from "./app/pages/cliente/productos/productos";
import ProductoDetalle from "./app/pages/cliente/producto-detalle/producto-detalle";
import ServiciosPage from "./app/pages/cliente/servicios/servicios"; 
import PerfilPage from "./app/pages/cliente/perfil/PerfilPage"; // 👈 NUEVA IMPORTACIÓN
import { AuthProvider, useAuth } from "./app/context/AuthContext";
import { ToastContainer, Toast } from 'react-bootstrap';

function AppRouter() {
  const { usuario, toast, hideToast } = useAuth();

  const isAdmin = usuario && String(usuario.rol || '').toLowerCase() === 'admin';

  return (
    <BrowserRouter>
      {/* Navbar decidido por el contexto */}
      {isAdmin ? <NavbarAdmin /> : <NavbarCliente />}

      <Routes>
        <Route path="/" element={<HomeCliente />} />
        <Route path="/home" element={<HomeCliente />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/inicio-sesion" element={<InicioSesion />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/productos" element={<ProductosCliente />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/admin/home-admin" element={<RequireAdmin><HomeAdmin /></RequireAdmin>} />
        <Route path="/admin/clientes" element={<RequireAdmin><ClientesAdmin /></RequireAdmin>} />
        <Route path="/admin/agenda" element={<RequireAdmin><AgendaAdmin /></RequireAdmin>} />
        <Route path="/admin/productos" element={<RequireAdmin><ProductosCRUD /></RequireAdmin>} />
        <Route path="/admin/usuario" element={<RequireAdmin><UsuarioAdmin /></RequireAdmin>} />
        <Route path="/admin/servicios-crud" element={<RequireAdmin><ServiciosCRUD /></RequireAdmin>} />
      </Routes>
      {/* Global toast container driven by AuthContext */}
      <ToastContainer position="bottom-end" className="p-3">
        {toast && (
          <Toast onClose={hideToast} show={!!toast.show} bg={toast.variant} delay={3000} autohide>
            <Toast.Header>
              <strong className="me-auto">{toast.title}</strong>
            </Toast.Header>
            <Toast.Body className="text-white">{toast.body}</Toast.Body>
          </Toast>
        )}
      </ToastContainer>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}