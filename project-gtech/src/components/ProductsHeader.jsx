import React from "react";

const ProductsHeader = ({ products = [], search = "", onFilterChange }) => {
  const ProductsTotal = products.length;

  return (
    <div className="w-full border-b-2 flex justify-between items-center p-4">
      <div>
        <span>Resultados para "{search}": </span>
        <span>{ProductsTotal} produtos encontrados</span>
      </div>
      <div className="flex items-center">
        <label htmlFor="sort" className="mr-2">
          Ordenar por:
        </label>
        <select id="sort" onChange={onFilterChange} className="border p-2">
          <option value="*">Todos os resultados</option>
          <option value="sociais">Sociais</option>
          <option value="bones">Bonés</option>
          <option value="tenis">Tênis</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsHeader;
