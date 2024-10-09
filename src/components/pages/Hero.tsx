import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <main className="flex-grow w-full bg-black flex items-center justify-center mt-[1%]">
      <div className="w-full max-w-none px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300 mb-4">
            Innovación y calidad a tu medida
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
          Transformamos ideas en soluciones digitales efectivas
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          En nuestra empresa de desarrollo de software, nos especializamos en
          crear soluciones personalizadas que impulsan el crecimiento y la
          eficiencia de tu negocio. Con un equipo de expertos en tecnología,
          utilizamos Next.js y Remix para ofrecer aplicaciones robustas y
          escalables que se adaptan a tus necesidades específicas.
        </p>
        <Button className="bg-gradient-to-r from-[#F28E64] to-[#CA5937] text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-[#E57A51] hover:to-[#A3472C] hover:border hover:border-[#FFAE42]">
          Hablemos de tu proyecto <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </main>
  );
};
