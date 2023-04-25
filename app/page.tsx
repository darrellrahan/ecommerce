import Banner from "./components/Banner";
import Footer from "./components/Footer";
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
      <div className="px-6 space-y-16 max-w-screen-xl m-auto">
        <Hero />
        <Proud />
        <Banner
          title="Creative harmonious living"
          content="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
          img="/images/banner/img-1.jpg"
        />
        <Trending />
        <Banner
          imgFirst
          title="Comfortable & Elegante Living"
          content="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
          img="/images/banner/img-2.jpg"
        />
      </div>
      <Footer />
    </main>
  );
}
