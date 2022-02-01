import "./CarrsList.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function CarrsList({ carros }) {
  if (carros.length === 0) {
    return <div>Nenhum carro econtrado...</div>;
  }

  return (
    <div className="carros-list">
      {carros.map((carro) => (
        <div key={carro.id} className="card">
          <div className="imgContainer">
            {" "}
            <Carousel>
              <div>
                <img src={carro.image[0]} alt="fusion" />
              </div>
              <div>
                <img src={carro.image[1]} alt="hb20" />
              </div>
              <div>
                <img src={carro.image[2]} alt="civic" />
              </div>
            </Carousel>
          </div>

          <h3>{carro.nome}</h3>
          <div className="infos">
            <p>{carro.marca}</p>
            <p>{carro.ano}</p>
            <p>{carro.cambio}</p>
          </div>
          <div>{carro.descricao.substring(0, 100)}...</div>
          <Link id="link" to={`/recipe/${carro.id}`}>
            Tenho interrese!
          </Link>
        </div>
      ))}
    </div>
  );
}
