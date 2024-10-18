import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import TechStack from "./elements/TechStack";
import { Videos } from "./components/pages/Videos";
import { Hero } from "./components/pages/Hero";
import AboutUsSection from "./components/pages/About";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Projects from "./components/pages/Projects/Projects";

function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.body.style.setProperty("--scroll", String(scrollPosition));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen w-full bg-[#1a1a1a] text-white flex flex-col">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute bg-gradient-to-t from-[#3b505a10] via-[#233036] to-[#095073] -right-48 rounded-br-[59px] rounded-bl-[100px]"
            style={{
              width: "830px",
              height: "870px",
              top: "-184.33px",
              transform: "rotate(26.32deg)",
              zIndex: 0,
            }}
          />
        </div>
        <div className="relative z-10">
          <Header />
          <motion.div
            ref={targetRef}
            style={{ opacity, scale }}
            className="fixed inset-0 pointer-events-none"
          >
            <div className="absolute inset-0 bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center" />
          </motion.div>

          <section id="hero">
            <Hero />
          </section>

          <section id="videos">
            <Videos />
          </section>

          <section id="about">
            <AboutUsSection />
          </section>
          <section id="techstack" className="w-full py-12">
            <TechStack />
          </section>
          <section>
            <Projects />
          </section>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
