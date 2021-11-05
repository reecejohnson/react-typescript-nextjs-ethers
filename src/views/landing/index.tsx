import Hero from "./components/hero";
import Guide from "./components/guide";

const Home = () => {
  return (
    <div className="flex flex-col justify-center mt-20">
      <Hero />
      <Guide />
    </div>
  );
};

export default Home;
