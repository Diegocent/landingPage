"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutUsSection() {
  return (
    <section className="py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 relative">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

        <motion.div
          className="relative max-w-3xl mx-auto text-center mb-5"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3B505A] to-[#707d83]">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-300">
            Innovación y eficiencia para impulsar tu negocio
          </p>
        </motion.div>

        <motion.div
          className="relative grid md:grid-cols-2 gap-8 mb-16"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-gradient-to-br from-[#3B505A] to-[#2C3E50] p-8 rounded-2xl shadow-lg border border-gray-700"
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Nuestra Misión
            </h3>
            <p className="text-gray-300 mb-4">
              Somos una microempresa de software dedicada a proporcionar
              soluciones informáticas innovadoras que abordan problemas
              específicos y mejoran la eficiencia operativa de nuestros
              clientes.
            </p>
            <p className="text-gray-300">
              Nos especializamos en crear herramientas tecnológicas a medida que
              no solo resuelven los desafíos actuales de las empresas, sino que
              también fomentan su crecimiento a largo plazo a través de la
              optimización y digitalización de sus procesos.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#3B505A] to-[#2C3E50] p-8 rounded-2xl shadow-lg border border-gray-700"
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Nuestro Compromiso
            </h3>
            <p className="text-gray-300 mb-4">
              Nuestro compromiso es adaptarnos a las necesidades de cada
              cliente, brindando productos escalables y de alta calidad que
              permiten a las empresas evolucionar en un entorno tecnológico en
              constante cambio.
            </p>
            <ul className="space-y-3 text-gray-300">
              {[
                "Soluciones personalizadas",
                "Innovación constante",
                "Calidad y escalabilidad",
                "Enfoque en el crecimiento del cliente",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ArrowRight className="h-5 w-5 mr-2 text-blue-400" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
