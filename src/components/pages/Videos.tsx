import { FeatureBox } from "@/elements/FeatureBox";
import { Clock, Code, Settings, Zap } from "lucide-react";
import HeroVideoDialog from "../ui/hero-video-dialog";
import { motion } from "framer-motion";

export const Videos = () => {
  // Variantes para animar los elementos cuando aparecen en la vista
  const sectionVariants = {
    hidden: { opacity: 0, y: 70 }, // Inicia invisible y desplazado hacia abajo
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  const sectionVariants2 = {
    hidden: { opacity: 0, y: 70 }, // Inicia invisible y desplazado hacia abajo
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
      },
    },
  };

  const featureBoxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Delay progresivo para que las FeatureBox aparezcan de a poco
      },
    }),
  };

  return (
    <motion.section
      className="w-full py-20 bg-gradient-to-t from-[#202b3135] via-[#202b31] to-[#202b313d]"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }} // Sin "once: true" para que la animación ocurra siempre que esté visible
    >
      <motion.div
        className="w-full px-4"
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center justify-between lg:flex-row">
          {/* Título y Subtítulo */}
          <motion.div className="mb-10 lg:w-1/2 lg:mb-0">
            <div className="flex items-center mb-4">
              <Zap className="mr-2 text-[#638696]" />
              <span className="text-[#638696]">Empieza en minutos</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Listo para Producción.{" "}
              <span className="text-gray-500">
                El SaaS Starter incluye todas las herramientas y recursos
                esenciales que necesitas para lanzar tu proyecto.
              </span>
            </h2>
          </motion.div>

          {/* Video */}
          <motion.div className="lg:w-1/2" variants={sectionVariants2}>
            <div className="p-1 rounded-lg">
              <div className="relative">
                <HeroVideoDialog
                  className="block dark:hidden"
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                  thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                  thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                  className="hidden dark:block"
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                  thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                  thumbnailAlt="Hero Video"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Boxes */}
        <motion.div className="grid grid-cols-1 gap-8 mt-20 md:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              custom={i}
              variants={featureBoxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }} // Sin "once: true" para que se repita la animación
            >
              <FeatureBox
                icon={<Zap className="w-6 h-6 text-[#638696]" />}
                title="Tecnología Moderna"
                description="YvagaCore está construido con React v18 y TypeScript. Usa cualquier combinación entre Next.js, Remix, Firebase y Supabase."
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
