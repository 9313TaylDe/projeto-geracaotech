import React from 'react';
import './Footer.css';


function Footer() {

  let logoFooter = "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-footer.svg"
  let Facebook = "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/facebook.svg"
  let Instagram = "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/instagram.svg"
  let twitter = "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/twitter.svg"

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <img className='logo' src={logoFooter} alt='logo-digital college'/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <div className="social-media">
            <a href="#">
              <img src = {Facebook} alt="Facebook" />
              </a>
            <a href="#">
              <img src = {Instagram} alt='instagram'/>
              </a>
            <a href="#">
              <img src ={twitter} alt='twitter'/>
              </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Informação</h3>
          <ul>
            <li><a href="#">Sobre Drip Store</a></li>
            <li><a href="#">Segurança</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Meus Pedidos</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Categorias</h3>
          <ul>
            <li><a href="#">Camisetas</a></li>
            <li><a href="#">Calças</a></li>
            <li><a href="#">Bonés</a></li>
            <li><a href="#">Headphones</a></li>
            <li><a href="#">Tênis</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p>(85) 3051-3411</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2022 Digital College</p>
      </div>
    </footer>
  );
}

export default Footer;
