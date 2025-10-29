import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar-cliente";
import { useNavigate } from "react-router-dom";
import "./inicio-sesion.css";

const InicioSesion = () => {
  const [mostrarLogin, setMostrarLogin] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioActivo, setUsuarioActivo] = useState(null);

  // ===== USUARIOS BASE =====
  const usuariosBase = [
    { nombre: "Bastian Sanches", email: "ba.sanches@duocuc.cl", password: "asd123", rol: "admin" },
    { nombre: "Matias Diaz", email: "mn.diaz@duocuc.cl", password: "123", rol: "admin" },
    { nombre: "Elias Delgado", email: "admin3@sb.com", password: "123", rol: "admin" },
    { nombre: "Carlos Martinez", email: "admin4@sb.com", password: "123", rol: "admin" }
  ];

  // ===== CARGA INICIAL =====
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("usuarios"));
    if (!data) {
      localStorage.setItem("usuarios", JSON.stringify(usuariosBase));
      setUsuarios(usuariosBase);
    } else {
      setUsuarios(data);
    }

    const activo = JSON.parse(localStorage.getItem("usuarioActivo"));
    if (activo) setUsuarioActivo(activo);
  }, []);

  const navigate = useNavigate();

  // ===== LOGIN =====
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.loginEmail.value.trim();
    const password = e.target.loginPassword.value.trim();

    const usuario = usuarios.find(
      (u) => u.email === email && u.password === password
    );

    if (usuario) {
      alert(`✅ Bienvenido ${usuario.nombre}`);
      localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
      setUsuarioActivo(usuario);

      if (usuario.rol === "admin") {
        navigate("/admin/home-admin");
      } else {
        navigate("/home");
      }
    } else {
      alert("⚠️ Correo o contraseña incorrectos");
    }
  };

  // ===== REGISTRO =====
  const handleRegister = (e) => {
    e.preventDefault();
    const nombre = e.target.registerName.value.trim();
    const email = e.target.registerEmail.value.trim();
    const password = e.target.registerPassword.value.trim();

    const existe = usuarios.some((u) => u.email === email);
    if (existe) {
      alert("⚠️ Este correo ya está registrado");
      return;
    }

    const nuevo = { nombre, email, password, rol: "user" };
    const nuevosUsuarios = [...usuarios, nuevo];

    localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));
  localStorage.setItem("usuarioActivo", JSON.stringify(nuevo));
    setUsuarios(nuevosUsuarios);
    setUsuarioActivo(nuevo);

    alert(`✅ Cuenta creada para ${nombre}`);
    setMostrarLogin(true);
    // redirigir al home del cliente tras registro
    navigate("/home");
  };

  return (
    <div className="background-gradient">
      <Navbar usuarioActivo={usuarioActivo} />

      <section className="page-header">
        <h1 className="admin-title">¡Bienvenido!</h1>
        <p className="admin-subtitle">
          Inicia sesión o crea tu cuenta para recibir descuentos exclusivos
        </p>
      </section>

      <section className="admin-options">
        {mostrarLogin ? (
          <div className="admin-card" id="login-card">
            <h3>Iniciar Sesión</h3>
            <p>Ingresa a tu cuenta para acceder a beneficios.</p>
            <form id="loginForm" onSubmit={handleLogin}>
              <input
                type="email"
                name="loginEmail"
                placeholder="Correo electrónico"
                required
                className="input-box"
              />
              <input
                type="password"
                name="loginPassword"
                placeholder="Contraseña"
                required
                className="input-box"
              />
              <button type="submit" className="cta-btn">
                Entrar
              </button>
            </form>
            <p style={{ marginTop: "15px" }}>
              ¿No tienes cuenta?{" "}
              <a
                href="#"
                onClick={() => setMostrarLogin(false)}
                style={{ color: "#d6336c", fontWeight: "600" }}
              >
                Regístrate aquí
              </a>
            </p>
          </div>
        ) : (
          <div className="admin-card" id="register-card">
            <h3>Crear Cuenta</h3>
            <p>Regístrate como cliente frecuente y recibe descuentos.</p>
            <form id="registerForm" onSubmit={handleRegister}>
              <input
                type="text"
                name="registerName"
                placeholder="Nombre completo"
                required
                className="input-box"
              />
              <input
                type="email"
                name="registerEmail"
                placeholder="Correo electrónico"
                required
                className="input-box"
              />
              <input
                type="password"
                name="registerPassword"
                placeholder="Contraseña"
                required
                className="input-box"
              />
              <button type="submit" className="cta-btn">
                Registrarme
              </button>
            </form>
            <p style={{ marginTop: "15px" }}>
              ¿Ya tienes cuenta?{" "}
              <a
                href="#"
                onClick={() => setMostrarLogin(true)}
                style={{ color: "#d6336c", fontWeight: "600" }}
              >
                Inicia sesión
              </a>
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default InicioSesion;
