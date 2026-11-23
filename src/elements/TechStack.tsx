import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import tecnologias from "@/constanst/tecnologias";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";
import { Container, Section, SectionHeader, reveal } from "@/components/ui/section";

const TILE = 160; // px per logo, gap included

export default function TechStack() {
  const { language } = useLanguage();
  const t = language === "es" ? esTranslations.stack : enTranslations.stack;

  const controls = useAnimation();
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current && carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth / 2);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (width <= 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    // Seamless loop: the list is rendered twice, so moving one copy's width lands on an identical frame.
    const loop = async () => {
      while (!cancelled) {
        await controls.start({ x: -width, transition: { duration: 40, ease: "linear" } });
        controls.set({ x: 0 });
      }
    };
    loop();
    return () => {
      cancelled = true;
      controls.stop();
    };
  }, [controls, width]);

  return (
    <Section tone="white" contained={false}>
      <Container>
        <SectionHeader tone="white" title={t.title} description={t.subtitle} />
      </Container>

      <motion.div
        {...reveal(0.1)}
        ref={containerRef}
        className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      >
        <motion.div ref={carouselRef} className="flex w-max" animate={controls}>
          {tecnologias.concat(tecnologias).map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="shrink-0 px-2" style={{ width: TILE }}>
              <div className="flex flex-col items-center justify-center gap-4 h-36 rounded-3xl bg-[#F5F5F7]">
                <div className="flex items-center justify-center bg-white shadow-sm w-14 h-14 rounded-2xl">
                  <img src={tech.path} alt="" className="object-contain w-8 h-8" />
                </div>
                <span className="text-sm text-neutral-600">{tech.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
