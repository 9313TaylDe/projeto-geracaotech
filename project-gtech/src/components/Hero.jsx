import { useState } from "react";
import Button from "./Button";
import Subtitles from "./Subtitles";
import Title from "./Title";
import Text from "./Text";
import product1 from "../assets/images/hero-product.png";
import product2 from "../assets/images/hero-product.png";
import product3 from "../assets/images/hero-product.png";
import Right from "../assets/images/arrow-right.svg";
import left from "../assets/images/arrow-left.svg";

const images = [product1, product2, product3];
const backgroundColors = ["green", "red", "black"]; // Cores de fundo diretamente

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="container-hero">
      <div className="hero">
        <div className="ofertas">
          <Subtitles type="primary">Melhores ofertas personalizadas</Subtitles>
          <Title type="primary">
            Queima de <br />
            estoque Nike 🔥
          </Title>
          <Text type="description">
            Consequat culpa exercitation mollit nisi excepteur do tempor laboris
            eiusmod irure consectetur.
          </Text>
          <Button color="pink">
            <a href="/produtos">Ver Ofertas</a>
          </Button>
        </div>
        <div
          className="container-img-hero relative"
          style={{ backgroundColor: backgroundColors[currentIndex] }}
        >
          <button
            onClick={handlePrevious}
            className="nav-button left-button absolute h-full"
          >
            <img src={left} alt="" />
          </button>
          <div className="img-hero">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          </div>
          <button
            onClick={handleNext}
            className="nav-button right-button absolute"
          >
            <img src={Right} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
