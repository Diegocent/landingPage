import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DialogUser } from "./DialogUser";

export const Hero = () => {
  const circleVariants = {
    initial: { x: 0, y: 0, scale: 0 },
    animate: (position) => ({
      x: position.x,
      y: position.y,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    }),
  };

  const fadeInUp = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      {/* Círculos de fondo */}
      <motion.div
        className="absolute bottom-14 left-10 w-40 h-40 bg-[#3B505A] rounded-full z-0"
        custom={{ x: -100, y: 90 }}
        initial="initial"
        animate="animate"
        variants={circleVariants}
      ></motion.div>

      <motion.div
        className="absolute top-1/4 right-20 w-32 h-32 bg-[#3B505A] rounded-full z-0"
        custom={{ x: 120, y: -150 }}
        initial="initial"
        animate="animate"
        variants={circleVariants}
      ></motion.div>

      <motion.div
        className="absolute bottom-44 left-2/4 w-12 h-12 bg-[#3B505A] rounded-full z-0"
        custom={{ x: 0, y: 100 }}
        initial="initial"
        animate="animate"
        variants={circleVariants}
      ></motion.div>

      <motion.div
        className="absolute z-0 w-40 h-40 bg-[#3B505A] rounded-full -bottom-10 -right-10"
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
            className="mb-6 text-3xl font-bold text-gray-400 md:text-5xl lg:text-5xl bg-clip-text"
            variants={fadeInUp}
          >
            <span className="text-[#3b505a] bg-clip-text bg-gradient-to-r from-[#3b505a] to-[#7daac0]">
              Especialistas
            </span>{" "}
            en dar vida a{" "}
            <span className="text-[#3b505a] bg-clip-text bg-gradient-to-r from-[#3b505a] to-[#7daac0]">
              tus ideas digitales
            </span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mb-8 text-xl text-justify text-gray-400"
            variants={fadeInUp}
          >
            Desarrollamos aplicaciones móviles y webs. Creamos soluciones
            personalizadas para potenciar y simplificar la gestión de tu
            empresa.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <DialogUser>
              <Button className="flex items-center bg-gradient-to-b from-[#3B505A] to-[#3b505a21] text-white px-8 py-3 rounded-full text-lg font-semibold z-10 hover:border-[#3B505A] hover:shadow-[0px_0px_5px_2px_rgba(59,80,90,0.5)] border-[#3B505A]">
                Hablemos de tu proyecto{" "}
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
            src="/logo.svg"
            alt="Logo"
            className="w-32 h-32 max-w-full md:w-64 md:h-64 lg:w-80 lg:h-80"
          />
        </motion.div>
      </div>
    </main>
  );
};
