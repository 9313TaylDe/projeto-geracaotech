import CollectionCard from "./CollectionCard";
import Subtitles from "./Subtitles";
import Category from "./Category";

import tShirtCollection from "../assets/images/tShirtCollection.png";
import tenisCollection from "../assets/images/tenisCollection.png";
import headPhoneCollection from "../assets/images/headPhoneCollection.png";

import iconTshirt from "../assets/images/iconTshirt.svg";
import iconPants from "../assets/images/iconPants.svg";
import iconHeadphones from "../assets/images/iconHeadphones.svg";
import iconSneakers from "../assets/images/iconSneakers.svg";

export default function CollectionCards() {
  return (
    <div className="container-collectioncards min-w-screen p-0 m-0">
      <div className="conteiner-coll mb-8">
        <Subtitles type="secondary">Produtos em alta</Subtitles>
        <div className="container-imgs border-2 flex ">
          <CollectionCard
            discountPercentual={"30"}
            img={tShirtCollection}
            title="Supreme Drop"
          />
          <CollectionCard
            discountPercentual={"20"}
            img={tenisCollection}
            title="Coleção Adidas"
          />
          <CollectionCard
            discountPercentual={"2"}
            img={headPhoneCollection}
            title="Beats Bass v1"
          />
        </div>
      </div>

      <div className="container-collecao border-2 flex  w-screen ">
        <Subtitles type="secondary" color="pink">
          Coleção em Destaque
        </Subtitles>
        <div className="conteiner-im flex justify-center">
          <Category img={iconTshirt} title="Camiseta" />
          <Category img={iconPants} title="Calça" />
          <Category img={iconPants} title="Boné" />
          <Category img={iconHeadphones} title="Headphone" />
          <Category img={iconSneakers} title="Tênis" />
        </div>
      </div>
    </div>
  );
}
