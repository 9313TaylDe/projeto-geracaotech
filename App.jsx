import React from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
    
     
const App = () => {
  const infoLinks = [
    { href: '#', text: 'Sobre Drip Store' },
    { href: '#', text: 'Segurança' },
    { href: '#', text: 'Wishlist' },
    { href: '#', text: 'Blog' },
    { href: '#', text: 'Trabalhe conosco' },
    { href: '#', text: 'Meus Pedidos' }
  ];

  const categorias = [
    { href: '#', text: 'Camisetas' },
    { href: '#', text: 'Calças' },
    { href: '#', text: 'Bonés' },
    { href: '#', text: 'Headphones' },
    { href: '#', text: 'Tênis' }

  ];

 
  return (
    
    <div>
      <Footer
        logoFooter="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-footer.svg"
        facebook="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/facebook.svg"
        instagram="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/instagram.svg"
        twitter="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/twitter.svg"
        categorias={categorias}
        infoLinks={infoLinks}
        endereco="Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161"
        telefone="(85) 3051-3411"
        copyAno={2024}
        marca="Digital College"
      
      />
    </div>
  );
};

export default App;