import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Lottie from "react-lottie";
import animationSecurity from "../assets/animation_protoring.json";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";
import { DialogUser } from "@/components/pages/DialogUser";

export default function DestacarProtoring() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { language } = useLanguage();
  const translations =
    language === "es" ? esTranslations.protoring : enTranslations.proctoring;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationSecurity,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section
      className="bg-gradient-to-t from-[#202b31] via-[#202b3135] to-[#202b31] py-20"
      ref={ref}
    >
      <div className="container flex flex-col items-center max-w-6xl gap-12 px-6 mx-auto md:px-12 lg:flex-row">
        {isInView && (
          <>
            {/* Imagen del proceso de examen */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center w-full lg:w-1/2"
            >
              <Lottie options={defaultOptions} height={300} width={300} />
            </motion.div>

            {/* Texto y Botón */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full text-center lg:text-left lg:w-1/2"
            >
              <h2 className="text-4xl font-bold text-[rgb(156,240,255)] mb-6">
                {translations.title}
              </h2>
              <p className="text-lg text-[#BEC1DD] mb-6">
                <strong className="text-[rgb(156,240,255)]">
                  {translations.description1}{" "}
                </strong>
                {translations.description2}{" "}
                <strong className="text-[rgb(156,240,255)]">
                  {translations.descriptionHeader}
                </strong>
              </p>
              <DialogUser>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[rgb(156,240,255)] text-[#3B505A] font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
                >
                  {translations.buttonText}
                </motion.button>
              </DialogUser>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
