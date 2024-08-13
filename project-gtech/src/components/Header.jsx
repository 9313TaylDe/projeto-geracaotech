import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoHeader from "../assets/images/logo-header.svg";
import iconBusca from "../assets/images/icon-busca.svg";
import carrinhoDeCompras from "../assets/images/carrinho.svg";
import "primeflex/primeflex.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <header className="header min-w-screen flex-wrap">
        <section className="corpo w-full">
          <Link to="/home" className="logo_digital">
            <img src={logoHeader} alt="logo digital" />
          </Link>
          <div className="header_box_input">
            <input
              type="text"
              className="input"
              placeholder="Pesquisar produto"
            />
            <button type="button" className="button_pesquisar">
              <img src={iconBusca} alt="ícone de busca" />
            </button>
          </div>
          <div className="botoes_entrar_cadastrar flex">
            <Link to="/criar-nova-conta" className="button_cadastrar">
              Cadastrar-se
            </Link>
            <button className="button_login">
              <Link to="/">Entrar</Link>
            </button>
          </div>
          <button
            className="carrinho_compras"
            type="button"
            onClick={handleClick}
          >
            <img src={carrinhoDeCompras} alt="ícone de carrinho de compras" />
          </button>
          <div className="">
            <p>
              <img
                style={{
                  backgroundColor: "black",
                  color: "reds",
                }}
                src="../assets/images/account.png"
                alt=""
              />
            </p>
          </div>
        </section>
        <div className="navegacao_principal flex w-full pl-8 border-2">
          <span className="menu_navegacao_principal flex">
            <Link to="/home">Home</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/categorias">Categorias</Link>
            <Link to="/meus-pedidos">Meus pedidos</Link>
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
