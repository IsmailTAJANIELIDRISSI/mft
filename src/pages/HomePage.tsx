import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Activities from "../components/sections/Activities";
import Realisations from "../components/sections/Realisations";
import Equipment from "../components/sections/Equipment";
import WhyMFT from "../components/sections/WhyMFT";
import References from "../components/sections/References";
import Contact from "../components/sections/Contact";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-mft-dark text-mft-grey-dark font-sans selection:bg-mft-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Activities />
        <Services />
        <Process />
        <Realisations />
        <Equipment />
        <WhyMFT />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
