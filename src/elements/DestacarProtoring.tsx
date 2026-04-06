"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaDownload,
  FaUserShield,
  FaEye,
  FaRobot,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";

export default function DestacarProtoring() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { language } = useLanguage();
  const sectionRef = useRef(null);

  const translations =
    language === "es"
      ? esTranslations.highlightProctor
      : enTranslations.highlightProctor;

  const { features, steps: pasos, benefits: beneficios, cta } = translations;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const featureIcons = [FaUserShield, FaEye, FaDownload];
  const benefitIcons = [FaUserShield, FaEye, FaRobot];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#060d11] py-24 px-6 overflow-hidden"
    >
      {/* Grid texture */}
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

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
            {translations.title}
          </h2>
          <div className="w-20 h-1 bg-[#7bd2e1] rounded-full mb-8" />
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
            {translations.description}
          </p>
        </motion.div>

        {/* ── FEATURE CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
          {features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-[#0d1c24] border border-[#1d3040] hover:border-[#7bd2e1]/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7bd2e1]/10 flex items-center justify-center mb-4 group-hover:bg-[#7bd2e1]/20 transition-colors">
                  <Icon className="text-[#7bd2e1] text-lg" />
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ── STEPS ── */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-black text-white mb-12"
          >
            {translations.functionProctor}
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pasos.map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col p-5 rounded-2xl bg-[#0d1c24] border border-[#1d3040] hover:border-[#7bd2e1]/30 transition-colors duration-300"
              >
                {/* Step number */}
                <span className="text-[#7bd2e1]/40 text-xs font-black uppercase tracking-widest mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="text-white text-sm font-semibold mb-2 leading-snug">
                  {paso.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">{paso.description}</p>

                {/* Arrow connector */}
                {index < pasos.length - 1 && (
                  <FaArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#7bd2e1]/30 text-sm z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── VIDEO + BENEFITS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">

          {/* Video */}
          <motion.div
            style={{ y: videoY }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#7bd2e1]/25 shadow-[0_0_80px_rgba(123,210,225,0.12)] aspect-video">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7bd2e1]/60 to-transparent z-10" />
              <iframe
                src={`https://www.youtube.com/embed/RWi01tPrOrc${isPlaying ? "?autoplay=1" : ""}`}
                title="ProctorGuard Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm transition hover:bg-black/40"
                >
                  <div className="w-16 h-16 rounded-full bg-[#7bd2e1] flex items-center justify-center shadow-[0_0_30px_rgba(123,210,225,0.5)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#060d11]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-4.586-2.576A1 1 0 009 9.418v5.164a1 1 0 001.166.975l4.586-2.576a1 1 0 000-1.737z" />
                    </svg>
                  </div>
                </button>
              )}
            </div>
          </motion.div>

          {/* Benefits + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col gap-5"
          >
            {beneficios.map((beneficio, index) => {
              const Icon = benefitIcons[index];
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0d1c24] border border-[#1d3040] hover:border-[#7bd2e1]/30 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#7bd2e1]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="text-[#7bd2e1] text-sm" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold mb-0.5">{beneficio.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{beneficio.description}</p>
                  </div>
                </div>
              );
            })}

            {/* Download button */}
            <a
              href="/material/proctorGuard.pdf"
              download
              className="group flex items-center justify-center gap-2 mt-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#060d11] bg-[#7bd2e1] hover:bg-[#9de0ec] transition-colors duration-300"
            >
              <FaDownload className="text-sm" />
              {cta.button}
            </a>
          </motion.div>
        </div>

        {/* ── CONTACT ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-[#1d3040]"
        >
          <p className="text-gray-500 text-sm text-center sm:text-left max-w-sm">
            {cta.text}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/+595974853466"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#25D366] transition-colors duration-300"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
            <a
              href="mailto:business@yvagacore.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#7bd2e1] transition-colors duration-300"
            >
              <FaEnvelope className="text-2xl" />
            </a>
            <a
              href="https://youtu.be/RWi01tPrOrc?si=6iFlFiGApfqMu7T0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#FF0000] transition-colors duration-300"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}