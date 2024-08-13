import logoHeader from "../assets/images/logo-header.svg";
import FooterIcon from "./FooterIcon";
import Informacoes from "./Informacoes";
const Footer = () => {
  return (
    <>
      <footer className="footer min-w-screen flex align-content-center">
        <div className="footer-container">
          <div className="container_sobre">
            <img className="container_img" src={logoHeader} alt="" />
            <span className="paragrafos">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quo
                ex error suscipit voluptatum voluptate temporibus deleniti unde!
                Rerum recusandae delectus illo ducimus nulla expedita veniam
                vitae nisi excepturi modi!
              </p>
              <FooterIcon />
            </span>
          </div>

          <div className="informations-footer">
            <Informacoes />
          </div>
          <div className="linha mt-5 w-full flex align-content-center justify-content-center">
            <p>@ 2024 Digital College</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
