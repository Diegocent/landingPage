"use client";

import { motion } from "framer-motion";
import { MoveRight, Sparkles, BrainCircuit, HandHeart } from "lucide-react";
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

  return (
    <section className="bg-gradient-to-b from-[#1f2b33] to-[#10191f] py-20 px-6">
      <div className="grid items-center max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-2">
        {/* Texto e íconos */}
        <div>
          <motion.h2
            className="mb-6 text-3xl font-bold text-white md:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.title}
          </motion.h2>

          <motion.p
            className="max-w-md mb-10 text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.description}
          </motion.p>

          <div className="space-y-6">
            {t.features.map((feature, index) => {
              const Icon = featuresIcons[index];
              return (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * (index + 1) }}
                >
                  <Icon className="w-6 h-6 text-[#7bd2e1] mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="flex flex-col gap-4 mt-10 sm:flex-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://www.instagram.com/tekko_app/"
              target="_blank"
              className="group inline-flex items-center gap-2 text-[#7bd2e1] hover:text-white border border-[#31444f] hover:border-white px-6 py-3 rounded-xl transition duration-300"
            >
              {t.buttons.instagram}
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://tekko.yvagacore.com"
              target="_blank"
              className="group inline-flex items-center gap-2 text-white bg-[#7bd2e1] hover:bg-[#4bbecf] px-6 py-3 rounded-xl font-semibold transition duration-300"
            >
              {t.buttons.visitSite}
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Video */}
        <motion.div
          className="relative w-full max-w-[400px] aspect-[9/16] mx-auto overflow-hidden rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Ae_fKY1Fmt8"
            title="Tekko - Shorts"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
