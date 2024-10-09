import { FeatureBox } from "@/elements/FeatureBox";
import { Clock, Code, Settings, Zap } from "lucide-react";
import React, { useRef, useEffect } from "react";

export const Videos = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (video) {
            if (entry.isIntersecting) {
              video.contentWindow?.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                "*"
              );
            } else {
              video.contentWindow?.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
              );
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full py-20 bg-gray-900">
      <div className="w-full px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="flex items-center mb-4">
              <Zap className="text-red-500 mr-2" />
              <span className="text-red-500">Empieza en minutos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Listo para Producción.{" "}
              <span className="text-gray-500">
                El SaaS Starter incluye todas las herramientas y recursos
                esenciales que necesitas para lanzar tu proyecto.
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-1 rounded-lg">
              <div className="bg-black rounded-lg aspect-video">
                {/* YouTube Video Embed */}
                <iframe
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Enbbq646Se4?enablejsapi=1"
                  title="Video de despliegue de React"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <FeatureBox
            icon={<Zap className="h-6 w-6 text-purple-500" />}
            title="Tecnología Moderna"
            description="YvagaCore está construido con React v18 y TypeScript. Usa cualquier combinación entre Next.js, Remix, Firebase y Supabase."
          />
          <FeatureBox
            icon={<Settings className="h-6 w-6 text-green-500" />}
            title="Listo para Producción"
            description="No necesitas perder tiempo en locuras de configuración: todo está listo para ser desplegado."
          />
          <FeatureBox
            icon={<Code className="h-6 w-6 text-blue-500" />}
            title="Código Limpio"
            description="La base de código es simple, limpia y bien comentada. Lo más importante es que es completamente personalizable y fácil de extender."
          />
          <FeatureBox
            icon={<Clock className="h-6 w-6 text-yellow-500" />}
            title="Actualizaciones Diarias"
            description="YvagaCore se actualiza todos los días para soportar las últimas versiones de los frameworks y bibliotecas que utiliza."
          />
        </div>
      </div>
    </section>
  );
};
