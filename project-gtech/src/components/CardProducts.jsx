const CardProducts = ({
  id,
  title,
  name,
  price,
  newPrice,
  disccount,
  category,
  image,
}) => {
  return (
    <div className="container-card_produto">
      <div className="card_produtos">
        {disccount && <span className="desconto ">{disccount}% OFF</span>}
        <img className="imagem" src={image} alt="ímagem do produto" />
      </div>
      <div className="new-descriptions w-full">
        <h4 className="title p-0 m-0">{title}</h4>
        <p className="nome p-0  m-0">{name}</p>
        <div className="precos p-0 m-0">
          <span className="preco">{price}</span>
          <span className="newpreco">{newPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
