import { ChevronRight } from "lucide-react";
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
              <Button className="relative flex items-center bg-gradient-to-b from-[#3B505A] to-[#3b505a21] text-white px-8 py-3 rounded-lg text-lg font-semibold z-10 border-none focus:outline-none focus:border-none shadow-[0_4px_8px_rgba(56,205,212,0.2)] transition-shadow duration-300 transform hover:scale-102 hover:border-[#8df4f6] hover:shadow-[0_4px_10px_rgba(56,205,212,0.25),0_0_15px_rgba(56,205,212,0.3)]">
                {translations.buttonText}{" "}
                <ChevronRight className="w-5 h-5 ml-2" />
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
