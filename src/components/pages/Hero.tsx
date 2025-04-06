import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DialogUser } from "./DialogUser";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { language } = useLanguage();
  
  // Selecciona las traducciones basadas en el idioma actual
  const translations =
    language === "es" ? esTranslations.hero : enTranslations.hero;

  const fadeInUp = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const circleVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <main className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      {/* Círculos de fondo */}
      <motion.div
        className="absolute bottom-14 left-10 w-40 h-40 bg-[#3b505a45] rounded-full z-0"
        custom={{ x: -100, y: 90 }}
        initial="initial"
        animate="animate"
        variants={circleVariants}
      ></motion.div>

      <motion.div
        className="absolute left-0 w-32 h-32 bg-[#3b505a45] rounded-full z-0"
        style={{ top: "calc(25% - 3cm)", left: "-1cm" }}
        custom={{ x: 0, y: -150 }}
        initial="initial"
        animate="animate"
        variants={circleVariants}
      ></motion.div>

      <motion.div
        className="absolute z-0 w-40 h-40 bg-[#3b505a45] rounded-full -bottom-10 -right-10"
        custom={{ x: 50, y: -10 }}
        initial="initial"
        animate="animate"
        variants={circleVariants}
      ></motion.div>

      {/* Contenido adaptado para pantallas pequeñas y grandes */}
      <div className="flex flex-col items-center justify-center w-full h-full px-4 m-4 space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:space-x-6">
        {/* Texto */}
        <motion.div
          className="text-center sm:text-left"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.h2
            className="mb-6 text-3xl font-bold text-gray-300 md:text-5xl lg:text-5xl bg-clip-text"
            variants={fadeInUp}
          >
            {translations.title.map((segment, index) => (
              <span
                key={index}
                className={
                  segment.style === "highlight"
                    ? "text-[rgb(123,210,225)] bg-clip-text bg-gradient-to-r from-[rgb(156,240,255)] to-[rgb(123,210,225)]"
                    : "text-gray-300"
                }
              >
                {segment.text}
              </span>
            ))}
          </motion.h2>

          <motion.p
            className="max-w-2xl mb-8 text-xl text-gray-300"
            variants={fadeInUp}
          >
            {translations.description}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex justify-center sm:justify-start">
            <DialogUser>
              <Button className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-md bg-gradient-to-r from-cyan-900 to-teal-900 px-8 py-3 text-lg font-medium text-white shadow-[0_6px_12px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(6,182,212,0.6)] border-none outline-none focus:outline-none focus:ring-0 active:scale-95">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-800 to-teal-800 opacity-0 blur-md transition-all duration-300 group-hover:opacity-20"></span>

                <span className="relative z-10 flex items-center gap-3">
                  {translations.buttonText}
                  <Lightbulb className="w-5 h-5 text-white transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110 animate-float" />
                </span>
              </Button>
           </DialogUser>
          </motion.div>
        </motion.div>

        {/* Logo */}
        <motion.div
          className="flex items-center justify-center"
          style={{ color: "black" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.9 },
          }}
        >
          <img
            src="/logonew.svg"
            alt="Logo"
            className="w-32 h-32 max-w-full md:w-64 md:h-64 lg:w-80 lg:h-80"
          />
        </motion.div>
      </div>
    </main>
  );
};
