import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

function Footer({
  logoFooter,
  facebook,
  instagram,
  twitter,
  infoLinks,
  categorias,
  endereco,
  telefone,
  copyAno,
  marca
 
}) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <img className="logo" src={logoFooter} alt="logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <div className="social-media">
            {facebook && (
              <a href={facebook}>
                <img src={facebook} alt="Facebook" />
              </a>
            )}
            {instagram && (
              <a href={instagram}>
                <img src={instagram} alt="Instagram" />
              </a>
            )}
            {twitter && (
              <a href={twitter}>
                <img src={twitter} alt="Twitter" />
              </a>
            )}
          </div>
        </div>
        <div className="footer-section">
          <h3>Informação</h3>
          <ul>
            {infoLinks.map((link, index) => (
              <li key={index}><a href={link.href}>{link.text}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Categorias</h3>
          <ul>
            {categorias.map((category, index) => (
              <li key={index}><a href={category.href}>{category.text}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>{endereco}</p>
          <p>{telefone}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {copyAno} {marca}</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  logoFooter: PropTypes.string.isRequired,
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  twitter: PropTypes.string,
  infoLinks: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  categorias: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  endereco: PropTypes.string.isRequired,
  telefone: PropTypes.string.isRequired,
  copyAno: PropTypes.number.isRequired,
  marca: PropTypes.string.isRequired
};

export default Footer;
