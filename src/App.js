import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Cliente */}
        <Route path="/" element={<HomeCliente />} />
        <Route path="/home" element={<HomeCliente />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/inicio-sesion" element={<InicioSesion />} />

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
