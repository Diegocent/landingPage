import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DialogUser } from "./DialogUser";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { language } = useLanguage();
  
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

      {/* Fondo negro con transparencia en la derecha para dejar ver el fondo azul del logo */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #060d11 55%, transparent 100%)",
        }}
      />

      {/* Grid sutil — igual que DestacarTepyx */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(#7bd2e1 1px, transparent 1px), linear-gradient(90deg, #7bd2e1 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glows ambientales */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#7bd2e1]/5 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#4bbecf]/4 blur-[120px] pointer-events-none z-0" />

      {/* Círculos de fondo originales */}
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

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 m-4 space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:space-x-6">
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

        {/* Logo — sin cambios */}
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