import CardProducts from "./CardProducts";
import { ListaProducts } from "./ListaProducts";

const ProductTrend = () => {
  return (
    <div className="container-produtos w-screen">
      <div className="container_interno_produtos">
        {ListaProducts.map((produto, index) => (
          <CardProducts
            key={index}
            title={produto.title}
            image={produto.image}
            disccount={produto.disccount}
            name={produto.name}
            price={produto.price}
            newPrice={produto.newPrice}
            category={produto.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductTrend;
