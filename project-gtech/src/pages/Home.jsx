import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductTrend from "../components/ProductsTrend";
import CollectionCards from "../components/CollectionCards";
import Hero from "../components/Hero";
import CardShoes from "../components/CardShoess";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <CollectionCards />
      <ProductTrend />
      <CardShoes />
      <Footer />
    </div>
  );
};

export default Home;
