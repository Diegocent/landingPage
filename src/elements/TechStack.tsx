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
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
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
    <>
      <motion.div
        className="relative max-w-4xl mx-auto text-center mb-16 mt-[6%]"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-[#CA5937]">
          Herramientas utilizadas
        </h2>
        <p className="text-xl text-gray-400">
          Con nuestro equipo tienes la posibilidad de trabajar con cualquiera de
          estas herramientas
        </p>
      </motion.div>
      <div className="container mx-auto overflow-hidden" ref={containerRef}>
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
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gray-800 border-gray-700 h-full">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <img
                    src={tech.path}
                    alt={`${tech.name} logo`}
                    className="w-12 h-12 object-contain mb-2"
                  />
                  <span className="text-sm font-medium text-gray-200 text-center">
                    {tech.name}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
