import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../../components/Navbar/Navbar-cliente";
import "../../../components/Navbar/Navbar.css";
import logo from "../../../assets/img/logo/logo.jpg";
import logoIG from "../../../assets/img/logo/logoIG.webp";
import faceLogo from "../../../assets/img/logo/facelogo.png";
import wasapLogo from "../../../assets/img/logo/logowasap.webp";
import gitLogo from "../../../assets/img/logo/git.png";

const Contacto = () => {
  return (
    <div className="bg-light min-vh-100">
      <Navbar usuarioActivo={null} />
      {/* Sección Hero */}
      <section
        className="text-center text-white d-flex flex-column justify-content-center align-items-center"
        style={{
          background:
            "linear-gradient(135deg, #f7e6eb 0%, #f8c6c8 50%, #eab1c6 100%)",
          height: "320px",
          paddingTop: "120px", // añade espacio interno arriba
        }}
      >
        <h1 className="fw-bold display-5 mb-3">Contáctanos</h1>
        <p className="lead mb-0">Estamos aquí para ayudarte</p>
      </section>

      {/* Contenido principal */}
      <div className="container py-5">
        <h2 className="text-center mb-5 text-danger">Redes Sociales</h2>

        <div className="row g-4 justify-content-center">
          {/* Instagram 1 */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img src={logo} className="card-img-top rounded-circle p-3" alt="_.style_and_beauty" />
              <div className="card-body">
                <h5 className="card-title">_.style_and_beauty</h5>
                <a
                  href="https://www.instagram.com/_.style_and_beauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-danger w-100"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Instagram 2 */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img src={logoIG} className="card-img-top rounded-circle p-3" alt="drhiai._" />
              <div className="card-body">
                <h5 className="card-title">drhiai._</h5>
                <a
                  href="https://www.instagram.com/drhiai._/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-danger w-100"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Facebook */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img src={faceLogo} className="card-img-top rounded-circle p-3" alt="Drhiaishna Martínez" />
              <div className="card-body">
                <h5 className="card-title">Drhiaishna Martínez</h5>
                <a
                  href="https://www.facebook.com/drhiaishna.martinez.1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-danger w-100"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img src={wasapLogo} className="card-img-top rounded-circle p-3" alt="Contacto WhatsApp" />
              <div className="card-body">
                <h5 className="card-title">Contacto WhatsApp</h5>
                <a
                  href="https://wa.me/56958612677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success w-100"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* GitHub */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img src={gitLogo} className="card-img-top rounded-circle p-3" alt="GitHub Proyect" />
              <div className="card-body">
                <h5 className="card-title">GitHub Proyect</h5>
                <a
                  href="https://github.com/Na1kox-AFK/Prueba-Veterinaria.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark w-100"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
