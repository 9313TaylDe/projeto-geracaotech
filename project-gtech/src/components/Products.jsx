import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProductsHeader from "../components/ProductsHeader";
import Footer from "../components/Footer";
import { ListaProducts } from "../data/ListaProducts";

const Products = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <NavBar />
      <div className="flex-grow">
        <ProductsHeader products={ListaProducts} search={""} />
      </div>
      <Footer />
    </main>
  );
};

export default Products;
