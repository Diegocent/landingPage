import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaYoutube } from "react-icons/fa";

export default function AgenciaDigital() {
 const [isPlaying, setIsPlaying] = useState(false);

 const handleVideoPlay = () => {
   setIsPlaying(true);
 };

 return (
   <section className="bg-[#0A1A2F] text-white py-20">
     <div className="container mx-auto px-6 max-w-6xl">
       {/* Encabezado */}
       <div className="text-center lg:text-left mb-12">
         <h1 className="text-4xl md:text-6xl font-bold leading-tight">
           <span className="text-white">Innovemos juntos la educación con </span>
           <span className="text-[rgb(123,210,225)]">ProtorGuard</span>
         </h1>
         <p className="text-gray-300 mt-4">
           La educación en Paraguay da un paso hacia el futuro. Nuestra IA avanzada con reconocimiento facial protege los exámenes virtuales, garantizando un proceso seguro y sin fraude. Integra fácilmente con las plataformas universitarias, transformando la manera en que se administran y evalúan los exámenes, todo en tiempo real.
         </p>
       </div>

       {/* Contenido principal: Video */}
       <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video bg-gray-800">
         <iframe
           src={`https://www.youtube.com/embed/kAcCUgjizck${isPlaying ? '?autoplay=1' : ''}`}
           title="ProtorGuard Demo"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen
           className="w-full h-full"
         />
         {!isPlaying && (
           <button 
             onClick={handleVideoPlay} 
             className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
           >
             <div className="w-16 h-16 bg-[rgb(123,210,225)] rounded-full flex items-center justify-center">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-8 w-8 text-white"
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
       </div>

       {/* Información adicional */}
       <div className="flex flex-col items-center mt-8 text-gray-400">
         <p className="text-center mb-4">Más información</p>
         {/* Logotipos de clientes */}
         <div className="flex justify-center items-center gap-8">
           <a href="https://wa.me/+595974853466" target="_blank" rel="noopener noreferrer">
             <FaWhatsapp className="text-gray-400 text-3xl hover:text-[rgb(123,210,225)]" />
           </a>
           <a href="mailto:business@yvagacore.tech" target="_blank" rel="noopener noreferrer">
             <FaEnvelope className="text-gray-400 text-3xl hover:text-[rgb(123,210,225)]" />
           </a>
           <a href="https://www.youtube.com/watch?v=kAcCUgjizck&list=PLu9oYY-7cMe92yakuSor_4ae9AHuwZFM4&ab_channel=Yvagacore" target="_blank" rel="noopener noreferrer">
             <FaYoutube className="text-gray-400 text-3xl hover:text-[rgb(123,210,225)]" />
           </a>
         </div>
       </div>
     </div>
   </section>
 );
}