import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import TechStack from "./elements/TechStack";
import { Videos } from "./components/pages/Videos";
import { Hero } from "./components/pages/Hero";
import AboutUsSection from "./components/pages/About";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <div className="min-h-screen w-full bg-black text-white flex flex-col">
          <div className="relative z-10">
            {/* Header y Navbar */}
            <Header></Header>
            <section id="hero">
              {/* Hero Section */}
              <Hero></Hero>
            </section>

            <section id="techstack" className="w-full py-12">
              <TechStack></TechStack>
            </section>

            <section id="videos">
              {/* Production-Ready Section */}
              <Videos></Videos>
            </section>

            <section id="about">
              <AboutUsSection></AboutUsSection>
            </section>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;
