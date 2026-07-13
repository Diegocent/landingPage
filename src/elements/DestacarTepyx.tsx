"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";

export default function DestacarTepyx() {
  const { language } = useLanguage();
  const t =
    language === "es"
      ? esTranslations.highlightTepyx
      : enTranslations.highlightTepyx;

  return (
    <section className="relative bg-[#060d11] py-28 md:py-36 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Encabezado editorial ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="flex items-center gap-2.5 text-gray-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#25d366]" />
              Tepyx · {t.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
              {t.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t.description}
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://tepyx.yvagacore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#7bd2e1] text-[#060d11] text-sm font-semibold hover:bg-[#9de0ec] transition-colors duration-300"
              >
                {t.buttons.visitApp}
              </a>
              <a
                href="https://tepyx.yvagacore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#7bd2e1] transition-colors duration-300"
              >
                {t.buttons.learnMore}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Características, sin tarjetas ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-4">
          {t.features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: "easeOut" }}
              className="border-t border-white/10 pt-7"
            >
              <p className="text-gray-600 text-sm mb-4">0{i + 1}</p>
              <h3 className="text-white font-semibold text-lg mb-2.5">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-[15px] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
