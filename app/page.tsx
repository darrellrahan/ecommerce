import Banner from "./components/Banner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNavbar from "./components/MobileNavbar";
import Proud from "./components/ProudProducts";
import Trending from "./components/Trending";

export default function Home() {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <div className="px-6 space-y-16">
        <Hero />
        <Proud />
        <Banner />
        <Trending />
      </div>
    </main>
  );
}
