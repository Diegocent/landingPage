"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Bot, Blocks, Zap, ArrowUpRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";

export default function DestacarTepyx() {
  const { language } = useLanguage();
  const t =
    language === "es"
      ? esTranslations.highlightTepyx
      : enTranslations.highlightTepyx;
  const featuresIcons = [Bot, Blocks, Zap];
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#7bd2e1]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#4bbecf]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* ── HERO ROW: big title + main image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">

          {/* Title block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pt-8"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-[#7bd2e1] rounded-full mb-8" />
            <p className="text-gray-400 text-xl leading-relaxed max-w-md">
              {t.description}
            </p>
          </motion.div>

          {/* Main image — big and prominent */}
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#7bd2e1]/25 shadow-[0_0_80px_rgba(123,210,225,0.12)]">
              <img
                src="/images/img1.png"
                alt="Tepyx platform"
                className="w-full h-auto object-cover"
              />
              {/* Shimmer top edge */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7bd2e1]/60 to-transparent" />
            </div>
            {/* Live indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#060d11]/80 backdrop-blur-sm border border-[#7bd2e1]/20 rounded-full px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7bd2e1] animate-pulse" />
              <span className="text-[#7bd2e1] text-xs font-bold uppercase tracking-widest">Live</span>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM ROW: 2 images + features + buttons ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-[#1d3040] shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:border-[#7bd2e1]/30 transition-colors duration-500"
          >
            <img
              src="/images/img2.png"
              alt="Tepyx agents"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7bd2e1]/30 to-transparent" />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-[#1d3040] shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:border-[#7bd2e1]/30 transition-colors duration-500"
          >
            <img
              src="/images/img3.png"
              alt="Tepyx workflows"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7bd2e1]/30 to-transparent" />
          </motion.div>

          {/* Features + Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-5"
          >

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://tepyx.yvagacore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-bold text-sm text-[#060d11] bg-[#7bd2e1] hover:bg-[#9de0ec] hover:text-black/80 transition-colors duration-300"
              >
                {t.buttons.visitApp}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://tepyx.yvagacore.com/documentation"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-semibold text-sm text-[#7bd2e1] border border-[#7bd2e1]/30 hover:border-white/80  hover:text-white/80 hover:bg-[#7bd2e1]/5 transition-all duration-300"
              >
                {t.buttons.learnMore}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}