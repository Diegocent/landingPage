"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function AboutUsSection() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

        <motion.div
          className="relative max-w-3xl mx-auto text-center mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-[#CA5937]">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-400">
            Innovación y eficiencia para impulsar tu negocio
          </p>
        </motion.div>

        <motion.div
          className="relative grid md:grid-cols-2 gap-8 mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="bg-gray-800 border-none p-8 rounded-2xl shadow-lg ">
            <h3 className="text-2xl font-bold mb-4 text-[#CA5937]">
              Nuestra Misión
            </h3>
            <p className="text-gray-400 mb-4">
              Somos una microempresa de software dedicada a proporcionar
              soluciones informáticas innovadoras que abordan problemas
              específicos y mejoran la eficiencia operativa de nuestros
              clientes.
            </p>
            <p className="text-gray-400">
              Nos especializamos en crear herramientas tecnológicas a medida que
              no solo resuelven los desafíos actuales de las empresas, sino que
              también fomentan su crecimiento a largo plazo a través de la
              optimización y digitalización de sus procesos.
            </p>
          </div>

          <div className="bg-gray-800 border-none p-8 rounded-2xl shadow-lg ">
            <h3 className="text-2xl font-bold mb-4 text-[#CA5937]">
              Nuestro Compromiso
            </h3>
            <p className="text-gray-400 mb-4">
              Nuestro compromiso es adaptarnos a las necesidades de cada
              cliente, brindando productos escalables y de alta calidad que
              permiten a las empresas evolucionar en un entorno tecnológico en
              constante cambio.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 text-[#FFAE42]" />
                Soluciones personalizadas
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 text-[#FFAE42]" />
                Innovación constante
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 text-[#FFAE42]" />
                Calidad y escalabilidad
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 text-[#FFAE42]" />
                Enfoque en el crecimiento del cliente
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
