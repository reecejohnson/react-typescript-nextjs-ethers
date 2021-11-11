import Hero from "./components/hero";
import Guide from "./components/guide";
import Header from "../../lib/components/header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center mt-20">
        <Hero />
        <Guide />
      </div>
    </>
  );
};

export default Home;
