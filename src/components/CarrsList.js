import "./CarrsList.css";
import Trash from "../assets/trash.svg";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { projectFirestore } from "../firebase/config";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function CarrsList({ carros }) {
  const { mode } = useTheme();
  if (carros.length === 0) {
    return <div>Nenhum carro econtrado...</div>;
  }
  const handleClick = (id) => {
    projectFirestore.collection("fastcar").doc(id).delete();
  };
  return (
    <div className="carros-list">
      {carros.map((carro) => (
        <div key={carro.id} className={`card ${mode}`}>
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
            <img
              className="delete"
              src={Trash}
              alt="deletar"
              onClick={() => handleClick(carro.id)}
            ></img>
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
