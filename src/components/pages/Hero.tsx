import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingEffect from "@/utils/TypingEffect";

export const Hero = () => {
  return (
    <main className="relative flex items-center justify-start w-full h-screen overflow-hidden">
      <div className="absolute bottom-14 left-10 w-20 h-20 bg-[#3B505A] rounded-full z-0"></div>
      <div className="absolute top-1/4 right-20 w-32 h-32 bg-[#3B505A] rounded-full z-0"></div>
      <div className="absolute bottom-44 left-2/4 w-12 h-12 bg-[#3B505A] rounded-full z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#3B505A] rounded-full z-0"></div>

      <div className="flex flex-col items-center justify-between w-full px-4 max-w-none md:flex-row">
        <div className="mb-10 text-left md:w-1/2 md:mb-0">
          <h2 className="max-w-4xl mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Transformamos ideas en soluciones digitales efectivas
          </h2>
          <p className="max-w-2xl mb-8 text-xl text-justify text-gray-400">
            <TypingEffect />

            
          </p>
          <div className="flex items-center">
            <Button className="flex items-center bg-gradient-to-b from-[#3B505A] to-[#3b505a21] text-white px-8 py-3 rounded-full text-lg font-semibold z-10 hover:border-[#3B505A] hover:shadow-2xl hover:shadow-[0px_0px_5px_2px_rgba(59,80,90,0.5)]">
              Hablemos de tu proyecto <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
        <div
          className="z-10 flex items-center justify-center md:w-1/2"
          style={{ color: "black" }}
        >
          <img
            src="/logo.svg" // La ruta comienza con una barra inclinada para acceder al archivo en la carpeta public
            alt="Logo"
            className="max-w-full w-96 h-96 " // Puedes agregar las clases de estilo que necesites
          />
        </div>
      </div>
    </main>
  );
};
