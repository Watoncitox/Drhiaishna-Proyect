import React from "react";
import "../../../components/Navbar/Navbar.css";
import logo from "../../../assets/img/logo/logo.jpg";
import logoIG from "../../../assets/img/logo/logoIG.webp";
import faceLogo from "../../../assets/img/logo/facelogo.png";
import wasapLogo from "../../../assets/img/logo/logowasap.webp";
import gitLogo from "../../../assets/img/logo/git.png";
import GlobalCard from '../../../components/Global-Card/Global-Card';

const Contacto = () => {
  return (
    <div className="bg-light min-vh-100">
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
          <div className="col-sm-6 col-md-4 col-lg-3">
            <GlobalCard
              image={logo}
              title="_.style_and_beauty"
              ctaText="Instagram"
              ctaLink="https://www.instagram.com/_.style_and_beauty/"
              external
            />
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <GlobalCard
              image={logoIG}
              title="drhiai._"
              ctaText="Instagram"
              ctaLink="https://www.instagram.com/drhiai._/"
              external
            />
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <GlobalCard
              image={faceLogo}
              title="Drhiaishna Martínez"
              ctaText="Facebook"
              ctaLink="https://www.facebook.com/drhiaishna.martinez.1"
              external
            />
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <GlobalCard
              image={wasapLogo}
              title="Contacto WhatsApp"
              ctaText="WhatsApp"
              ctaLink="https://wa.me/56958612677"
              external
            />
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <GlobalCard
              image={gitLogo}
              title="GitHub Proyect"
              ctaText="GitHub"
              ctaLink="https://github.com/Na1kox-AFK/Prueba-Veterinaria.git"
              external
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
