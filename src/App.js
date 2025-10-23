import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeCliente from "./app/pages/cliente/home-cliente/home-cliente";
import HomeAdmin from "./app/pages/admin/home-admin/home-admin";
import RequireAdmin from "./app/components/Auth/RequireAdmin";
import Contacto from "./app/pages/cliente/contacto/contacto";
import Nosotros from "./app/pages/cliente/nosotros/nosotros";
import InicioSesion from "./app/pages/inicio-sesion/inicio-sesion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeCliente />} />
        <Route path="/home" element={<HomeCliente />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/inicio-sesion" element={<InicioSesion />} />
        <Route
          path="/admin/home-admin"
          element={
            <RequireAdmin>
              <HomeAdmin />
            </RequireAdmin>
          }
        />
        <Route path="/contacto" element={<Contacto />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
