"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, BrainCircuit, HandHeart, ArrowUpRight, MoveRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";

export default function DestacarTekko() {
  const { language } = useLanguage();
  const t =
    language === "es"
      ? esTranslations.highlightTekko
      : enTranslations.highlightTekko;
  const featuresIcons = [Sparkles, BrainCircuit, HandHeart];
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#060d11] py-24 px-6 overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#7bd2e1 1px, transparent 1px), linear-gradient(90deg, #7bd2e1 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#7bd2e1]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#4bbecf]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Video ── */}
          <motion.div
            style={{ y: videoY }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            {/* Phone frame */}
            <div className="relative w-full max-w-[300px]">
              {/* Glow behind phone */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-[#7bd2e1]/10 pointer-events-none" />

              <div className="relative rounded-[2.5rem] overflow-hidden border border-[#7bd2e1]/25 shadow-[0_0_80px_rgba(123,210,225,0.12)] aspect-[9/16]">
                {/* Shimmer top */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7bd2e1]/60 to-transparent z-10" />

                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Ae_fKY1Fmt8"
                  title="Tekko - Shorts"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
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
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#060d11] bg-[#7bd2e1] hover:bg-[#9de0ec] hover:text-black/80 transition-colors duration-300"
              >
                {t.buttons.visitSite}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://www.instagram.com/tekko_app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-[#7bd2e1] border border-[#7bd2e1]/30 hover:border-white/80 hover:text-white/80 hover:bg-[#7bd2e1]/5 transition-all duration-300"
              >
                {t.buttons.instagram}
                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}