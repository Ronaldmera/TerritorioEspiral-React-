import { useEffect } from "react";
import "../Header/Header.css";

const Header = () => {
  useEffect(() => {
    const menuBtn = document.getElementById("menu-btn");
    const navbarCollapse = document.getElementById("navbarNavDropdown");
    const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Asegurar que Bootstrap esté disponible
    if (window.bootstrap && navbarCollapse) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });

      // Alternar clase para la animación del botón hamburguesa
      if (menuBtn) {
        menuBtn.addEventListener("click", function () {
          menuBtn.classList.toggle("open");
        });
      }

      // Cierra el menú y quita animación de botón al hacer clic en un enlace
      navbarLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (navbarCollapse.classList.contains("show")) {
            bsCollapse.hide();
            menuBtn.classList.remove("open");
          }
        });
      });
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg shadow-sm fixed-top">
      <div className="container-fluid px-3 px-sm-4 d-flex">
        <div className="d-flex align-items-center">
          <a className="navbar-brand me-2" href="#">
            <img src="/ico.ico" alt="Logo" width="35" />
          </a>
          <p className="name mb-0">Territorio Espiral</p>
        </div>

        <button
          className="navbar-toggler p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="menu-btn"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end px-1"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#hero">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#conocenos">
                Conócenos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                Galería
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#donation">
                Donación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
