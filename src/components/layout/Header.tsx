import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const sections = [
    { clave: "hero", valor: "Inicio" },
    { clave: "techstack", valor: "Herramientas" },
    { clave: "videos", valor: "Videos" },
    { clave: "about", valor: "Sobre Nosotros" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          } else if (activeSection === entry.target.id) {
            setActiveSection(""); // Reset if the section is no longer focused
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
      className="fixed top-0 w-full flex justify-center text-white rounded-lg z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex w-full backdrop-blur-sm justify-center h-full py-4">
        <div className="flex items-center justify-center w-1/5">
          <Link to="/" className="text-white font-sans hover:text-[#3b505a]">
            YvagaCore
          </Link>
        </div>
        <div className="flex items-center justify-center w-4/5 space-x-12">
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
                  className="absolute -top-5 left-0 right-0 h-4 bg-[#3b505a] rounded-b-md"
                  style={{ transform: "translateY(-50%)" }}
                />
              )}
              {section.valor}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};
