import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import tecnologias from "@/constanst/tecnologias";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";

export default function TechStack() {
  const { language } = useLanguage();
  const translations =
    language === "es" ? esTranslations.stack : enTranslations.stack;

  const controls = useAnimation();
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
    <section className="py-24 overflow-hidden bg-[#0a0f14]">
      <motion.div
        className="relative max-w-4xl mx-auto mb-16 text-center px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#7bd2e1]">
          {translations.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400">
          {translations.subtitle}
        </p>
      </motion.div>

      {/* Contenedor del carrusel */}
      <motion.div
        className="container mx-auto"
        ref={containerRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.div
          ref={carouselRef}
          className="flex"
          animate={controls}
          style={{ width: `${tecnologias.length * 150}px` }}
        >
          {tecnologias.concat(tecnologias).map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="w-[150px] p-3 flex-shrink-0"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex flex-col items-center justify-center h-[150px] bg-[#11161a] border border-white/5 rounded-2xl shadow-lg hover:border-[#7bd2e1]/30 hover:shadow-[0_8px_30px_rgba(123,210,225,0.08)] transition-all duration-300">
                <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <img
                    src={tech.path}
                    alt={`${tech.name} logo`}
                    className="object-contain w-8 h-8 drop-shadow-md"
                  />
                </div>
                <span className="text-sm font-medium text-gray-300">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
