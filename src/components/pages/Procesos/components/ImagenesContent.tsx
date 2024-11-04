"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ImagenesContent() {
  const [currentIndex, setCurrentIndex] = useState(1); // Comenzar desde 1 para que app1 sea la primera imagen

  const handleImageClick = () => {
    // Cambia al siguiente índice y reinicia si está en el último
    setCurrentIndex((prevIndex) => (prevIndex % 4) + 1); // Cambia entre 1 y 5
  };

  return (
    <Card className="w-4/5 mx-auto bg-transparent border-none shadow-none">
      <CardContent className="p-0 bg-transparent">
        <div className="flex justify-center">
          <div className="relative overflow-hidden" onClick={handleImageClick}>
            <AnimatePresence>
              <motion.img
                key={currentIndex}
                src={`/procesos/app${currentIndex}.png`} // Captura de la app
                alt={`Proceso ${currentIndex}`}
                className="object-contain w-full h-[600px] min-h-[600px]" // Establece una altura mínima
                initial={{ opacity: 0, scale: 0.8 }} // Comienza con desvanecimiento y un poco más pequeño
                animate={{ opacity: 1, scale: 1 }} // Se desvanece y crece a su tamaño original
                transition={{ duration: 0.5, ease: "easeInOut" }} // Suave transición
              />
            </AnimatePresence>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
