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
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Sección activa: la última cuyo inicio ya pasó el primer tercio de la pantalla.
  // Se calcula también al cargar, para que "Inicio" aparezca marcado desde el principio.
  useEffect(() => {
    const updateActive = () => {
      let current = sections[0]?.clave ?? "";
      sections.forEach((section) => {
        const element = document.getElementById(section.clave);
        if (element && element.getBoundingClientRect().top <= window.innerHeight / 3) {
          current = section.clave;
        }
      });
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, [sections]);

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
      className={`fixed z-50 flex justify-center w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ top: "20px" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      <nav
        className="flex items-center justify-between w-[calc(100%-32px)] max-w-6xl px-4 py-2 mx-auto text-white border rounded-2xl bg-black/55 backdrop-blur-xl border-white/10 md:px-6 md:py-3"
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
              aria-current={activeSection === section.clave ? "true" : undefined}
              className={`relative text-sm transition-colors duration-300 ease-brand hover:text-white ${
                activeSection === section.clave ? "text-white" : "text-white/60"
              }`}
            >
              {section.valor}
              {activeSection === section.clave && (
                <span className="absolute left-0 right-0 h-px bg-white -bottom-1" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 p-0.5 border rounded-lg border-white/10">
          {(["en", "es"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              aria-pressed={language === lang}
              className={`px-2 py-1 text-xs uppercase rounded-md border-0 transition-colors duration-300 ease-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                language === lang
                  ? "bg-white text-black hover:bg-white"
                  : "bg-transparent text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              {lang}
            </button>
          ))}
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
