import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
            >
              <img
                src="/face.PNG"  
                alt="Proceso de examen"
                className="w-[410px] h-[400px] object-cover" 
              />
            </motion.div>
            {/* Texto y Botón */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full text-center lg:text-left lg:w-1/2"
            >
              <h2 className="text-4xl font-bold text-[rgb(130,236,255)]">
                {translations.title}
              </h2>
              <p className="text-lg text-[rgb(130,236,255)]">
                <strong className="text-[#ffffff] mb-6">
                  {translations.description1}{" "}
                </strong>
                {translations.description2}{" "}
                <strong className="text-[#ffffff] mb-6">
                  {translations.descriptionHeader}
                </strong>
              </p>
              {/* Se agrega margen superior al botón para separarlo más del texto */}
              <DialogUser>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center bg-gradient-to-b from-[#3B505A] to-[#3b505a21] text-white px-8 py-3 rounded-lg text-lg font-semibold z-10 border-none focus:outline-none focus:border-none shadow-[0_4px_8px_rgba(56,205,212,0.2)] transition-shadow duration-300 transform hover:scale-102 hover:border-[#8df4f6] hover:shadow-[0_4px_10px_rgba(56,205,212,0.25),0_0_15px_rgba(56,205,212,0.3)] mt-8"
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
