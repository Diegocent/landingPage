"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const images = ["app1", "app2", "app3", "app4"];

export default function ImagenesContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
    }, 5000); // Cambia las imágenes cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  // Calcular los índices de las dos imágenes a mostrar
  const secondIndex = (currentIndex + 1) % images.length;

  return (
    <Card className="w-4/5 mx-auto bg-transparent border-none shadow-none">
      <CardContent className="p-0 bg-transparent">
        <div className="flex gap-4 relative w-full h-72 overflow-hidden bg-transparent rounded-lg">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={`/procesos/${images[currentIndex]}.png`}
              alt={`Proceso ${currentIndex + 1}`}
              className="w-1/2 h-full object-contain "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            />
            <motion.img
              key={secondIndex}
              src={`/procesos/${images[secondIndex]}.png`}
              alt={`Proceso ${secondIndex + 1}`}
              className="w-1/2 h-full object-contain -ml-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.01 }}
            />
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
}
