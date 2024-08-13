import React, { useState, useEffect } from "react";
import CardProducts from "./CardProducts";
import ProductsHeader from "./ProductsHeader";
import { ListaProducts, ListaBone, ListaCamisetas } from "./ListaProducts";
import Filter from "./Filter";
import Header from "./Header";
import Footer from "./Footer";
import ImageDetail from "../pages/ProductViewPage";

const ProductShow = () => {
  const allProducts = [...ListaProducts, ...ListaBone, ...ListaCamisetas];

  const [products, setProducts] = useState(allProducts);
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    estado: null,
  });
  const [highlightCategory, setHighlightCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    applyFilters();
  }, [selectedFilters]);

  const handleFilterChange = (name, value, checked) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (name === "category") {
        updatedFilters.category = checked ? [value] : [];
        setHighlightCategory(checked ? value : null);
      } else {
        updatedFilters[name] = value;
      }

      return updatedFilters;
    });
  };

  const applyFilters = () => {
    let filteredProducts = allProducts;

    if (selectedFilters.category.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedFilters.category.includes(product.category.toLowerCase())
      );
    }

    if (selectedFilters.estado) {
      filteredProducts = filteredProducts.filter(
        (product) => product.estado === selectedFilters.estado
      );
    }

    setProducts(filteredProducts);
  };

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseImageDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Header />
      <div className="w-full">
        <ProductsHeader
          products={products}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="product-show-container flex flex-col lg:flex-row">
        <div className="filter-header-container lg:w-1/4 p-2">
          <Filter
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="products-grid-container flex flex-wrap gap-4 lg:w-3/4  p-2">
          {products.length > 0 ? (
            products.map((card) => (
              <CardProducts
                key={card.id}
                id={card.id}
                category={card.category}
                discountPrice={card.discountPrice}
                disccount={card.disccount}
                title={card.title}
                name={card.name}
                price={card.price}
                newPrice={card.newPrice}
                image={card.image}
                highlighted={card.category === highlightCategory}
                onClick={() => handleImageClick(card)}
              />
            ))
          ) : (
            <p>Nenhum produto encontrado</p>
          )}
        </div>
      </div>
      <Footer />
      {selectedProduct && (
        <ImageDetail
          images={selectedProduct.images} // Supondo que cada produto tem um array de imagens
          onClose={handleCloseImageDetail}
        />
      )}
    </>
  );
};

export default ProductShow;
