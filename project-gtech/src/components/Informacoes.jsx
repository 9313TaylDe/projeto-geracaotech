const Informacoes = ({ title }) => {
  const informations = {
    title: "Informacoes",
    infos: [
      "Sobre Drip Store",
      "Segurança",
      "Wishlist",
      "Blog",
      "Trabalhe conosco",
      "Meus Pedidos",
    ],
  };
  const categorys = {
    title: "Categorias",
    categ: ["Camisetas", "Calças", "Bonés", "Headphones", "Tênis"],
  };
  const contatcs = {
    title: "Contato",
    contact: [
      "Email: 001@dripstore.com",
      "Telefone:(11)9999-9999",
      "Endereço:Rua A 123",
    ],
  };

  return (
    <div className="container_informacoes flex">
      <div className="footer-container_informacoes">
        <h3 className="underline">{informations.title}</h3>

        {informations.infos.map((info, index) => (
          <div key={index}>{info}</div>
        ))}
      </div>
      <div className="footer-container_categorias">
        <h3 className="underline">{categorys.title}</h3>

        {categorys.categ.map((catego, index) => (
          <div className="" key={index}>
            {catego}
          </div>
        ))}
      </div>
      <div className="footer-container_contatos">
        <h3 className="underline">{contatcs.title}</h3>

        {contatcs.contact.map((contat, index) => (
          <div key={index}>{contat}</div>
        ))}
      </div>
    </div>
  );
};

export default Informacoes;
