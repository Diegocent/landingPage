"use client";

import { motion, useScroll, useTransform, } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, BrainCircuit, HandHeart, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";

const screenshots = [
  "/Screenshot 19.png",
  "/Screenshot 15.png",
  "/Screenshot 17.png",
];

export default function DestacarTekko() {
  const { language } = useLanguage();
  const t =
    language === "es"
      ? esTranslations.highlightTekko
      : enTranslations.highlightTekko;
  const featuresIcons = [Sparkles, BrainCircuit, HandHeart];
  const sectionRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [, setDirection] = useState(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imagesY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#060d11] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Carrusel de screenshots ── */}
          <motion.div
            style={{ y: imagesY }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Stacked screenshots */}
            <div className="relative w-full max-w-[280px] h-[400px] sm:max-w-[360px] sm:h-[520px] flex items-center justify-center">
              {screenshots.map((src, i) => {
                const offset = i - current;
                const isActive = offset === 0;

                return (
                  <motion.img
                    key={src}
                    src={src}
                    alt={`Tekko screenshot ${i + 1}`}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className="absolute w-[200px] h-[360px] sm:w-[260px] sm:h-[480px] object-cover rounded-3xl cursor-pointer border border-[#7bd2e1]/20 shadow-[0_30px_80px_rgba(0,0,0,0.4)] bg-[#0a1520]"
                    animate={{
                      x: offset * 40,
                      y: offset * 12,
                      scale: isActive ? 1 : 0.92,
                      rotate: offset * 3,
                      opacity: Math.abs(offset) > 2 ? 0 : 1,
                      zIndex: 10 - Math.abs(offset),
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                    }}
                    whileHover={
                      isActive
                        ? { y: -8, scale: 1.02 }
                        : {}
                    }
                  />
                );
              })}
            </div>
          </motion.div>

          {/* ── RIGHT: Text + features + buttons ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
                {t.title}
              </h2>
              <div className="w-20 h-1 bg-[#7bd2e1] rounded-full mb-8" />
              <p className="text-gray-400 text-xl leading-relaxed max-w-md mb-12">
                {t.description}
              </p>
            </motion.div>

            {/* Features */}
            <div className="flex flex-col gap-4 mb-12">
              {t.features.map((feature, index) => {
                const Icon = featuresIcons[index];
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#0d1c24] border border-[#1d3040] hover:border-[#7bd2e1]/30 transition-colors duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 * (index + 1) }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#7bd2e1]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#7bd2e1]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">
                        {feature.title}
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="https://tekko.yvagacore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#7bd2e1] text-[#060d11] text-sm font-semibold hover:bg-[#9de0ec] transition-colors duration-300"
              >
                {t.buttons.visitSite}
              </a>
              <a
                href="https://www.instagram.com/tekko_app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-white hover:text-[#7bd2e1] transition-colors duration-300"
              >
                {t.buttons.instagram}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}