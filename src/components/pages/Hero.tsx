import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  // Definimos la animación que comienza en el centro
  const circleVariants = {
    initial: { x: 0, y: 0, scale: 0 },
    animate: (position) => ({
      x: position.x,
      y: position.y,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    }),
  };

  // Variantes para el texto y los elementos en cascada
  const fadeInUp = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="relative flex items-center justify-start w-full h-screen overflow-hidden">
      {/* Círculo 1 */}
      <motion.div
        className="absolute bottom-14 left-10 w-40 h-40 bg-[#3B505A] rounded-full z-0"
        custom={{ x: -100, y: 90 }} // Movimiento hacia izquierda-abajo
        initial="initial"
        animate="animate"
        variants={circleVariants}
      ></motion.div>

      {/* Círculo 2 */}
      <motion.div
        className="absolute top-1/4 right-20 w-32 h-32 bg-[#3B505A] rounded-full z-0"
        custom={{ x: 120, y: -150 }} // Movimiento hacia derecha-arriba
        initial="initial"
        animate="animate"
        variants={circleVariants}
      ></motion.div>

      {/* Círculo 3 */}
      <motion.div
        className="absolute bottom-44 left-2/4 w-12 h-12 bg-[#3B505A] rounded-full z-0"
        custom={{ x: 0, y: 100 }} // Movimiento hacia abajo
        initial="initial"
        animate="animate"
        variants={circleVariants}
      ></motion.div>

      {/* Círculo 4 */}
      <motion.div
        className="absolute z-0 w-40 h-40 bg-[#3B505A] rounded-full -bottom-10 -right-10"
        custom={{ x: 50, y: -10 }} // Movimiento hacia derecha-abajo
        initial="initial"
        animate="animate"
        variants={circleVariants}
      ></motion.div>

      {/* Contenido */}
      <div className="flex flex-col items-center justify-between w-full px-4 max-w-none md:flex-row">
        <motion.div
          className="mb-10 text-left md:w-1/2 md:mb-0"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.3 }} // Animación en cascada
        >
          {/* H2 Animación */}
          <motion.h2
            className="max-w-4xl mb-6 text-4xl font-bold md:text-5xl lg:text-5xl text-[#3b505a] bg-clip-text bg-gradient-to-r from-[#3b505a] to-[#7daac0]"
            variants={fadeInUp}
          >
            Transformamos ideas en soluciones digitales efectivas
          </motion.h2>

          {/* P Animación */}
          <motion.p
            className="max-w-2xl mb-8 text-xl text-justify text-gray-400"
            variants={fadeInUp}
          >
            Desarrollamos aplicaciones móviles y webs. Creamos soluciones
            personalizadas para potenciar y simplificar la gestión de tu empresa
          </motion.p>

          {/* Button Animación */}
          <motion.div variants={fadeInUp}>
            <Button className="flex items-center bg-gradient-to-b from-[#3B505A] to-[#3b505a21] text-white px-8 py-3 rounded-full text-lg font-semibold z-10 hover:border-[#3B505A] hover:shadow-[0px_0px_5px_2px_rgba(59,80,90,0.5)] border-[#3B505A]">
              Hablemos de tu proyecto <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Logo Animación */}
        <motion.div
          className="z-10 flex items-center justify-center md:w-1/2"
          style={{ color: "black" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.9 },
          }} // Logo tiene un retraso mayor
        >
          <img src="/logo.svg" alt="Logo" className="max-w-full w-96 h-96 " />
        </motion.div>
      </div>
    </main>
  );
};
