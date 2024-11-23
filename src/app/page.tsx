import Navbar from "./component/navbar";
import HeroSection from "./component/herosection";
import Cards from "./component/cards";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
    </div>
  );
}
