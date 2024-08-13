import Shoes from "../assets/images/shoesBanner.svg";
import eclipse from "../assets/images/elipse.svg";
import Button from "./Button";

const CardShoes = () => {
  return (
    <section className="container-shoes min-w-screen border-2">
      <div className="container-shoes-aninhar flex flex-wrap">
        <img
          className="eclipse_fundo absolute"
          src={eclipse}
          alt="plano de fundo"
        />
        <img
          className="shoes_sobreposto relative z-10"
          src={Shoes}
          alt="banner tenis"
        />
      </div>
      <div className="container-shoes-card_informations gap-3">
        <span className="">Oferta Especial</span>
        <h2 className="air-jordan">
          Air Jordan edição <br />
          de colecionadores
        </h2>
        <p className="frases">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim{" "}
          <br />
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>
        <Button color="pink">
          <a className="botao-shoes-verofertas" href="/produtos">
            Ver oferta
          </a>{" "}
        </Button>
      </div>
    </section>
  );
};

export default CardShoes;
