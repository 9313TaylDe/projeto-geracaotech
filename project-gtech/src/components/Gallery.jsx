import imageProduts from "../assets/images/product.png";
import { ListaGallery } from "./ListaProducts";
export const SimpleCard = ({ name, image }) => {
  return (
    <div className="simlpes_card h-full w-full ">
      <div className="box_simple h-full w-full border-2">
        <img className="img_simple w-10rem h-10rem" src={image} alt="imagem" />
      </div>
      <p>{name}</p>
    </div>
  );
};

const cardGallery = () => {
  return (
    <div className="card_galery">
      {ListaGallery.map((galeria, index) => {
        return (
          <SimpleCard key={index} name={galeria.name} image={galeria.image} />
        );
      })}
    </div>
  );
};

export default cardGallery;
