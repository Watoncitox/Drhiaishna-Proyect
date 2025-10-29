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
import ProductosCliente from "./app/pages/cliente/productos/productos";
import ProductoDetalle from "./app/pages/cliente/producto-detalle/producto-detalle";
import ServiciosPage from "./app/pages/cliente/servicios/servicios"; 
import PerfilPage from "./app/pages/cliente/perfil/PerfilPage"; // 👈 NUEVA IMPORTACIÓN

function App() {
  // 1. Lógica para el usuario activo
  const [usuarioActivo, setUsuarioActivo] = useState(null);

  useEffect(() => {
    try {
      const data = localStorage.getItem("usuarioActivo");
      if (data) {
        setUsuarioActivo(JSON.parse(data));
      }
    } catch (error) {
      console.error("Error leyendo usuarioActivo de localStorage:", error);
    }
  }, []);

  // 2. LÓGICA DE ROLES: Verifica si el usuario activo es administrador
  const isAdmin = usuarioActivo && usuarioActivo.rol === 'ADMIN'; 
  
  return (
    <BrowserRouter>
      {/* 3. RENDERIZADO CONDICIONAL DE LA BARRA (SOLO UNA A LA VEZ) */}
      {isAdmin ? (
        <NavbarAdmin usuarioActivo={usuarioActivo} />
      ) : (
        <NavbarCliente usuarioActivo={usuarioActivo} />
      )}
      
      <Routes>
        {/* Cliente */}
        <Route path="/" element={<HomeCliente />} />
        <Route path="/home" element={<HomeCliente />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/inicio-sesion" element={<InicioSesion />} />
        
        {/* RUTA DE PERFIL (NUEVA) */}
        <Route path="/perfil" element={<PerfilPage />} />

        {/* RUTA DE SERVICIOS */}
        <Route path="/servicios" element={<ServiciosPage />} />

        {/* Productos (Cliente) */}
        <Route path="/productos" element={<ProductosCliente />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />

        {/* Admin (protegido) */}
        <Route
          path="/admin/home-admin"
          element={
            <RequireAdmin>
              <HomeAdmin />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/clientes"
          element={
            <RequireAdmin>
              <ClientesAdmin />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/agenda"
          element={
            <RequireAdmin>
              <AgendaAdmin />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/productos"
          element={
            <RequireAdmin>
              <ProductosCRUD />
            </RequireAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;