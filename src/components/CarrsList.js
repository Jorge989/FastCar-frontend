import { useState } from "react";
import "./CarrsList.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function CarrsList({ carros }) {
  const [carrosImg, setCarroImg] = useState(carros.map((carro) => carro.image));
  if (carros.length === 0) {
    return <div>Nenhum carro econtrado...</div>;
  }
  console.log(carrosImg);

  return (
    <div className="carros-list">
      {carros.map((carro) => (
        <div key={carro.id} className="card">
          <div className="imgContainer">
            {" "}
            {/* <button
              className="leftbtn"
              // onClick={() => handleCarrsCarrousel(carro.image)}
            >
              {"<"}
            </button> */}
            {/* <img src={carro.image}></img> */}
            <Carousel>
              <div>
                <img src={carro.image} />
                {/* <p className="legend">Foto 1</p> */}
              </div>
              <div>
                <img src={carro.image[1]} />
              </div>
              <div>
                <img src={carro.image[2]} />
              </div>
            </Carousel>
            {/* <button className="rightbtn">{">"}</button> */}
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
