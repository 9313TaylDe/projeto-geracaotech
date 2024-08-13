import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductTrend from "./ProductsTrend";
import cardGallery from "./Gallery";
import Home from "../pages/Home";

const Layout = (children) => {
  return (
    <>
      {/* <Header />
      {children}
      <cardGallery />
      <ProductTrend />
      <Footer /> */}

      <Home />
    </>
  );
};

export default Layout;
