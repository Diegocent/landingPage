import { useState } from "react";
import { motion } from "framer-motion";
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

  const translations =
    language === "es"
      ? esTranslations.highlightProctor
      : enTranslations.highlightProctor;

  const features = translations.features;
  const pasos = translations.steps;
  const beneficios = translations.benefits;
  const cta = translations.cta;

  return (
    <section className="relative bg-gradient-to-t from-[#202b3135] via-[#202b31] to-[#202b313d] text-white py-24 overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            {translations.title}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            {translations.description}
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-6 mb-20 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#233036] rounded-xl p-6 shadow-md cursor-pointer"
            >
              <div className="mb-3 text-[rgb(123,210,225)] text-4xl">
                {index === 0 ? (
                  <FaUserShield />
                ) : index === 1 ? (
                  <FaEye />
                ) : (
                  <FaDownload />
                )}
              </div>
              <h4 className="mb-1 text-lg font-bold">{feature.title}</h4>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Paso a paso */}
        <div className="mt-20 mb-16">
          <h3 className="mb-12 text-3xl font-bold text-center">
            {translations.functionProctor}
          </h3>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap">
            {pasos.map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative bg-[#1d2a2f] rounded-xl p-6 w-full md:w-64 shadow-md text-center"
              >
                <div className="mb-2 text-sm text-gray-400">
                  Paso {index + 1}
                </div>
                <h4 className="mb-2 text-lg font-bold">{paso.title}</h4>
                <p className="text-sm text-gray-300">{paso.description}</p>
                {index < pasos.length - 1 && (
                  <div className="absolute hidden transform -translate-y-1/2 md:block -right-8 top-1/2">
                    <FaArrowRight className="text-[rgb(123,210,225)] text-xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video + Beneficios */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {beneficios.map((beneficio, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-[rgb(123,210,225)] text-3xl">
                  {index === 0 ? (
                    <FaUserShield />
                  ) : index === 1 ? (
                    <FaEye />
                  ) : (
                    <FaRobot />
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-semibold">{beneficio.title}</h4>
                  <p className="text-gray-300">{beneficio.description}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <a
                href="/material/proctorGuard.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-[rgb(123,210,225)] text-black font-bold rounded-lg hover:bg-opacity-80 transition"
              >
                <FaDownload className="mr-2" /> {cta.button}
              </a>
            </div>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden bg-gray-800 shadow-2xl rounded-xl aspect-video"
          >
            <iframe
              src={`https://www.youtube.com/embed/RWi01tPrOrc${
                isPlaying ? "?autoplay=1" : ""
              }`}
              title="ProtorGuard Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
              >
                <div className="w-16 h-16 bg-[rgb(123,210,225)] rounded-full flex items-center justify-center shadow-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.752 11.168l-4.586-2.576A1 1 0 009 9.418v5.164a1 1 0 001.166.975l4.586-2.576a1 1 0 000-1.737z"
                    />
                  </svg>
                </div>
              </button>
            )}
          </motion.div>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center mt-16 text-gray-400">
          <p className="mb-4 text-center">{cta.text}</p>
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://wa.me/+595974853466"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-[#25D366] text-3xl hover:text-[rgb(123,210,225)]" />
            </a>
            <a
              href="mailto:business@yvagacore.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-gray-400 text-3xl hover:text-[rgb(123,210,225)]" />
            </a>
            <a
              href="https://youtu.be/RWi01tPrOrc?si=6iFlFiGApfqMu7T0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-gray-100 text-3xl hover:text-[rgb(123,210,225)]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
