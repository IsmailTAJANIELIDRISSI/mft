import { useEffect } from "react";
import AppLoader from "./components/ui/AppLoader";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Formation from "./components/sections/Formation";
import Process from "./components/sections/Process";
import Equipment from "./components/sections/Equipment";
import WhyMFT from "./components/sections/WhyMFT";
import Contact from "./components/sections/Contact";

function App() {
  // Add Outfit and DM Sans fonts if not directly in index.html
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;700&family=Outfit:wght@400;600;700;800&family=Syne:wght@600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <AppLoader />
      <div className="min-h-screen bg-mft-bg text-mft-grey-dark font-sans selection:bg-mft-orange selection:text-white">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Services />
          <Formation />
          <Process />
          <Equipment />
          <WhyMFT />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
