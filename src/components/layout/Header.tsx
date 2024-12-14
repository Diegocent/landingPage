import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const { language, setLanguage } = useLanguage();

  // Cargar las traducciones según el idioma seleccionado
  const sections =
    language === "es" ? esTranslations.sections : enTranslations.sections;

  useEffect(() => {
    const handleScroll = () => {
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
  }, [sections]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Esto hace que el scroll sea suave
    });
  };

  return (
    <motion.header
      className="fixed z-10 flex justify-center w-full top-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav
        className="flex items-center justify-between w-full max-w-screen-lg px-4 py-2 mx-auto text-white bg-gray-800 rounded-lg bg-opacity-40 bg-opacity-30 md:px-8 md:py-3"
        style={{ borderRadius: "12px" }}
      >
        {/* Logo con scroll hacia arriba */}
        <motion.h2
          className="relative text-lg font-bold text-white font-[Promethean] cursor-pointer"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{
            textShadow: "0px 0px 8px rgba(255, 255, 255, 0.7)",
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          onClick={scrollToTop} 
        >
          YvagaCore
          {/* Gorro de Santa Claus */}
          <img
            src="/gorro.png"
            alt="Gorro de Santa"
            className="absolute top-[-11px] right-[-1rem] w-[1.4em] h-auto rotate-[-8deg]"
          />
        </motion.h2>

        {/* Menu */}
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

        {/* Language Selector */}
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

        {/* Mobile Menu Icon */}
        <MobileMenu
          sections={sections}
          activeSection={activeSection}
          handleScroll={handleScrollTo}
        />
      </nav>
    </motion.header>
  );
};
