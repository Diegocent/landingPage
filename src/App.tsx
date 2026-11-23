import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/layout/Header";
import TechStack from "./elements/TechStack";
import { CodeJourney } from "./components/pages/CodeJourney";
import { Clientes } from "./components/pages/Clientes";
import AboutUsSection from "./components/layout/Footer";
import { useEffect } from "react";
import "./i18n";
import { LanguageProvider } from "./context/LanguageContext";
import DestacarProtoring from "./elements/DestacarProtoring";
import FloatingButton from "./FloatingButton";
import DestacarTekko from "./elements/DestacarTekko";
import DestacarTepyx from "./elements/DestacarTepyx";

function App() {
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
      <div className="flex flex-col w-full min-h-screen text-white bg-black">
        <FloatingButton />
        <LanguageProvider>
          <div className="relative z-10">
            <Header />

            <section id="hero">
              <CodeJourney />
            </section>

            <section id="proyectos">
              <DestacarTepyx />
              <DestacarTekko />
              <DestacarProtoring />
            </section>

            <section id="videos">
              <Clientes />
            </section>

            <section id="techstack">
              <TechStack />
            </section>

            <section id="about">
              <AboutUsSection />
            </section>
          </div>
        </LanguageProvider>
      </div>
    </Router>
  );
}

export default App;
