import HeroSection from "./components/HeroSection";

const Home = () => {
  const data = {
    name: "Sharma store",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default Home;
