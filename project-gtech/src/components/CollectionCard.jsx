import Button from "../components/Button";

export default function CollectionCard({ title, discountPercentual, img }) {
  return (
    <div className="container_informacoes_alta">
      <div className="bg-black-alpha-50 relative h-full w-full ">
        <div className="container-informacoes-card flex flex-column pl-3 pt-3 relative">
          <span className="container-collection-desconto absolute self-start">
            {discountPercentual}% OFF
          </span>
          <h2 className="container-collection-title  self-start text-[#1F1F1F]">
            {title}
          </h2>
          <button className="container-collection-botao absolute cursor-pointer">
            Comprar
          </button>
        </div>

        <img className="img-container absolute" src={img} alt={title} />
      </div>
    </div>
  );
}
