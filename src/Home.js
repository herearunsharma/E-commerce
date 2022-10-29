import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import Footer from "./components/Footer";

const Home = () => {
  const data = {
    name: "Sharma store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
      <Footer />
    </>
  );
};

export default Home;
