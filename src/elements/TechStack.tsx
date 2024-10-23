import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import tecnologias from "@/constanst/tecnologias";

export default function TechStack() {
  const controls = useAnimation();
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 }, // Oculto al inicio
    visible: { opacity: 1, y: 0 }, // Aparece cuando está visible
    transition: { duration: 0.5, ease: "easeOut" },
  };

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current && carouselRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const carouselWidth = carouselRef.current.scrollWidth;
        setWidth(carouselWidth - containerWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const animateSlider = async () => {
      await controls.start({
        x: -width,
        transition: { duration: 40, ease: "linear" },
      });
      controls.set({ x: 0 });
      animateSlider();
    };

    if (width > 0) {
      animateSlider();
    }
  }, [controls, width]);

  return (
    <section className="py-16 bg-transparent">
      <motion.div
        className="relative max-w-4xl mx-auto mb-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Activa la animación cuando se ve el 20% del elemento
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-[#638696]">
          Herramientas utilizadas
        </h2>
        <p className="text-xl text-gray-400">
          Con nuestro equipo tienes la posibilidad de trabajar con cualquiera de
          estas herramientas
        </p>
      </motion.div>

      {/* Contenedor del carrusel */}
      <motion.div
        className="container mx-auto overflow-hidden"
        ref={containerRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Animación cuando entre en la vista del usuario
        variants={fadeInUp}
      >
        <motion.div
          ref={carouselRef}
          className="flex"
          animate={controls}
          style={{ width: `${tecnologias.length * 100}px` }}
        >
          {tecnologias.concat(tecnologias).map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="w-[100px] p-2 flex-shrink-0"
              whileHover={{ scale: 1.05 }} // Escala al pasar el mouse
            >
              <Card className="h-full bg-gray-800 border-gray-700">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <img
                    src={tech.path}
                    alt={`${tech.name} logo`}
                    className="object-contain w-12 h-12 mb-2"
                  />
                  <span className="text-sm font-medium text-center text-gray-200">
                    {tech.name}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
