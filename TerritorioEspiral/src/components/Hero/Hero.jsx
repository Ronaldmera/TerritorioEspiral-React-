// importando cada imagen del hero
import hero1 from "../../assets/Hero/hero1.webp";

import hero3 from "../../assets/Hero/hero3.webp";
import "../Hero/Hero.css";
const Hero = () => {
  return (
    <section id="hero" className="pt-5 w-100">
      <div
        id="carousel-img"
        className="carousel slide mx-auto position-relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel-img"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel-img"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner text-center">
          <div className="carousel-item active">
            <img
              src={hero3}
              className="img-fluid w-100 mx-auto c-img"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={hero1}
              className="img-fluid w-100 mx-auto c-img"
              alt="..."
              loading="lazy"
            />
          </div>
        </div>

        {/* Texto encima del slider  */}
        <div className="box-hero container text-white text-center">
          <h1 className="display-4 fw-bold subtitle">
            Dales Una Segunda Oportunidad
          </h1>
          <p className="lead">
            Cada día rescatamos animales abandonados que merecen un hogar lleno
            de amor. Ayúdanos a seguir cambiando vidas.
          </p>
          <div className="botones d-flex justify-content-center gap-3 mt-3">
            <a href="#donation" className="btn">
              Donar
            </a>
            <a href="#contact" className="btn">
              Contáctanos
            </a>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel-img"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel-img"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
