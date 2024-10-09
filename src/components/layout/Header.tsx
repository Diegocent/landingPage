import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Header = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="py-2 sticky top-0 bg-black bg-opacity-50 z-10 shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full px-1 py-2 lg:px-6">
        <div className="flex flex-row items-center">
          <div className="flex w-4/12 items-center space-x-4 lg:space-x-8">
            <div className="hidden items-center space-x-0.5 lg:flex">
              <nav className="space-x-6">
                {/* Cambiar a Link y mantener el efecto smooth scrolling */}
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("hero");
                  }}
                  className="text-[#CA5937] hover:text-[#FFAE42] transition-colors"
                >
                  Inicio
                </Link>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("techstack");
                  }}
                  className="text-[#CA5937] hover:text-[#FFAE42] transition-colors"
                >
                  Herramientas
                </Link>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("videos");
                  }}
                  className="text-[#CA5937] hover:text-[#FFAE42] transition-colors"
                >
                  Videos
                </Link>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("about");
                  }}
                  className="text-[#CA5937] hover:text-[#FFAE42] transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </nav>
            </div>
          </div>

          <div className="flex w-4/12 justify-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#CA5937] via-[#FFAE42] to-[#FF00FF] transition-colors hover:text-[#FFAE42]"
            >
              YvagaCore
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
