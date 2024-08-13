import React, { useState } from "react";
import CardProducts from "./CardProducts";
import ImageModal from "./ImageModal";
import { ListaProducts } from "./ListaProducts";

const ProductsFilterShow = () => {
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [selectedImage, setSelectedImage] = useState(null);

  const filterProducts = ListaProducts.filter((product) => {
    return (
      (category === "" || product.category === category) &&
      product.price <= maxPrice
    );
  });

  const handleImageClick = (images) => {
    setSelectedImage(images);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-screen">
      <div className="w-5/6 mt-12 w-full">
        <div className="box_categorias_opcoes w-full">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select_categorys border rounded p-3 bg-black-alpha-30"
          >
            <option value="">Todas as categorias</option>
            <option value="tenis">Tênis</option>
            <option value="bones">Bonés</option>
            <option value="calcas">Calças</option>
            <option value="camisetas">Camisetas</option>
          </select>

          <label htmlFor="">Resultado para {category}</label>
        </div>

        <div className="flex flex-wrap gap-3 xl:justify-end xl:w-4/5 w-screen justify-between">
          {filterProducts.map((card) => (
            <CardProducts
              key={card.id}
              id={card.id}
              discount={card.disccount}
              image={card.image}
              name={card.name}
              title={card.title}
              price={card.price}
              newPrice={card.newPrice}
              category={card.category}
              onImageClick={() => handleImageClick(card.image)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageModal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProductsFilterShow;
