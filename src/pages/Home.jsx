import Hero from "../components/home/Hero";
import News from "../components/home/News";
import Leader from "../components/home/Leader";
import Structure from "../components/home/Structure";
import CerdasSehat from "../components/home/CerdasSehat";

const Home = () => {
  return (
    <section>
      <Hero />
      <CerdasSehat />
      <Leader />
      <Structure />
      <News />
    </section>
  );
};

export default Home;
