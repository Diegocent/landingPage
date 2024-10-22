import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const sections = [
    { clave: "hero", valor: "Inicio" },
    { clave: "videos", valor: "Procesos" },
    { clave: "techstack", valor: "Tecnologias" },
    { clave: "proyectos", valor: "Proyectos" },
    { clave: "about", valor: "Sobre Nosotros" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          } else if (activeSection === entry.target.id) {
            setActiveSection("");
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id.clave);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
        {/* Logo */}
        <motion.h2
          className="text-lg font-bold text-white font-[Promethean]"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{
            textShadow: "0px 0px 8px rgba(255, 255, 255, 0.7)",
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        >
          YvagaCore
        </motion.h2>

        {/* Menu */}
        <div className="hidden space-x-6 md:flex md:items-center md:space-x-8 lg:space-x-12">
          {sections.map((section) => (
            <Link
              key={section.clave}
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(section.clave);
              }}
              className={`relative transition-colors hover:text-[#3b505a] ${
                activeSection === section.clave
                  ? "text-[#3b505a]"
                  : "text-white"
              }`}
            >
              {activeSection === section.clave && (
                <span
                  className="absolute -top-3 left-0 right-0 h-1 bg-[#3b505a] rounded-b-md"
                  style={{ transform: "translateY(-50%)" }}
                />
              )}
              {section.valor}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <MobileMenu
          sections={sections}
          activeSection={activeSection}
          handleScroll={handleScroll}
        />
      </nav>
    </motion.header>
  );
};
