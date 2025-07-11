import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const { language, setLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0); 

  const sections =
    language === "es" ? esTranslations.sections : enTranslations.sections;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Si el usuario hace scroll hacia abajo y pasa un punto mínimo
        setIsVisible(false);
      } else {
        // Si el usuario hace scroll hacia arriba o se detiene
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Actualizar la sección activa
      sections.forEach((section) => {
        const element = document.getElementById(section.clave);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top >= 0 && rect.top <= window.innerHeight / 3;
          if (isVisible) {
            setActiveSection(section.clave);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, sections]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      className={`fixed z-10 flex justify-center w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ top: "20px"}}
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      <nav
        className="flex items-center justify-between w-full max-w-screen-lg px-4 py-2 mx-auto text-white bg-gray-800 rounded-lg bg-opacity-40 bg-opacity-30 md:px-8 md:py-3"
        style={{ borderRadius: "12px" }}
      >
        <motion.h2
          className="relative text-lg font-bold text-white font-[Promethean] cursor-pointer"
          whileHover={{
            textShadow: "0px 0px 8px rgba(255, 255, 255, 0.7)",
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          onClick={scrollToTop}
        >
          YvagaCore
        </motion.h2>

        <div className="hidden space-x-6 md:flex md:items-center md:space-x-8 lg:space-x-12">
          {sections.map((section) => (
            <a
              key={section.clave}
              href={`#${section.clave}`}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(section.clave);
              }}
              className={`relative transition-colors hover:text-[rgb(123,210,225)] ${
                activeSection === section.clave
                  ? "text-[rgb(123,210,225)]"
                  : "text-white"
              }`}
            >
              {activeSection === section.clave && (
                <span
                  className="absolute -top-3 left-0 right-0 h-1 bg-[rgb(123,210,225)] rounded-b-md"
                  style={{ transform: "translateY(-50%)" }}
                />
              )}
              {section.valor}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setLanguage("en")}
            className={`px-2 py-1 text-xs font-semibold ${
              language === "en"
                ? "bg-[#1c1c1c] text-[rgb(106,181,194)]"
                : "bg-[#1c1c1c] text-white"
            } rounded-lg`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("es")}
            className={`px-2 py-1 text-xs font-semibold ${
              language === "es"
                ? "bg-[#1c1c1c] text-[rgb(106,181,194)]"
                : "bg-[#1c1c1c] text-white"
            } rounded-lg`}
          >
            ES
          </button>
        </div>

        <MobileMenu
          sections={sections}
          activeSection={activeSection}
          handleScroll={handleScrollTo}
        />
      </nav>
    </motion.header>
  );
};
