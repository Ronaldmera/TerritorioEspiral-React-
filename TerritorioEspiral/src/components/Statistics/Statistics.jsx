import "../Statistics/Statistics.css";
import Card from "./Card/Card";
import Boton from "../Boton/Boton";

// importando cada imagen de cada card
import image1 from "../../assets/Statistics/1.svg";
import image2 from "../../assets/Statistics/2.svg";
import image3 from "../../assets/Statistics/3.svg";
import image4 from "../../assets/Statistics/4.svg";
const Statistics = () => {
  return (
    <section id="estadisticas" className="text-center py-0 tamaño-fuente">
      <div className="container-fluid py-5">
        <div className="container c1">
          <h2 className="fw-bold mb-3 display-5">
            Hogar para más de <span className="text-black">110</span> animalitos
          </h2>
          <p className="mb-4 px-md-5">
            En <strong>Territorio Espiral</strong> creemos que cada vida
            importa. No rescatamos solo animales, rescatamos historias llenas de
            esperanza. Cada número representa un corazón que volvió a latir con
            alegría, una mirada que volvió a confiar y una cola que volvió a
            moverse con amor. Gracias al compromiso de nuestra comunidad, hemos
            logrado transformar el sufrimiento en nuevas oportunidades.
          </p>

          <Boton text={"Donar"} href={"#donation"} />
        </div>
      </div>
      <div className="container c2 lh-sm">
        <div className="row g-2 g-sm-4">
          <Card
            number={"26.700"}
            title={"Animales rescatados en los últimos 15 años"}
            image={image1}
          />
          <Card
            number={"14.200"}
            title={"Animales dados en adopción"}
            image={image2}
          />
          <Card
            number={"1.816"}
            title={"Animales cuidados actualmente"}
            image={image3}
          />
          <Card
            number={"+5.000"}
            title={"Seguidores y aliados"}
            image={image4}
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
