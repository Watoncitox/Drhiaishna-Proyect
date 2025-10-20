import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeCliente from "./app/pages/cliente/home-cliente/home-cliente";
import Contacto from "./app/pages/cliente/contacto/contacto";
import Nosotros from "./app/pages/cliente/nosotros/nosotros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeCliente />} />
        <Route path="/home" element={<HomeCliente />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
