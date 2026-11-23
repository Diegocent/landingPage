import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, HandHeart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { Card, IconTile, PillButton, Section, SectionHeader, TextLink, muted, reveal } from "@/components/ui/section";

const ICONS = [Sparkles, BrainCircuit, HandHeart];
/** App Store screenshots, ordered so each panorama pair sits side by side. */
const SCREENS = ["/tekko/1.webp", "/tekko/2.webp", "/tekko/3.webp", "/tekko/4.webp", "/tekko/5.webp"];

export default function DestacarTekko() {
  const { language } = useLanguage();
  const t = language === "es" ? esTranslations.highlightTekko : enTranslations.highlightTekko;

  return (
    <Section tone="grey">
      <SectionHeader tone="grey" eyebrow="Tekko" title={t.title} description={t.description}>
        <PillButton href="https://tekko.yvagacore.com" external>
          {t.buttons.visitSite}
        </PillButton>
        <TextLink href="https://www.instagram.com/tekko_app/" external>
          {t.buttons.instagram}
        </TextLink>
      </SectionHeader>

      {/* Screenshot strip: five columns on desktop, swipeable row on phones. */}
      <motion.div
        {...reveal(0.1)}
        className="flex gap-3 pb-2 -mx-6 overflow-x-auto px-6 snap-x snap-mandatory md:mx-0 md:px-0 md:grid md:grid-cols-5 md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {SCREENS.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Tekko ${i + 1}`}
            loading="lazy"
            className="w-[58%] sm:w-[38%] md:w-full shrink-0 snap-start aspect-[9/16] object-cover rounded-[20px] bg-white"
          />
        ))}
      </motion.div>

      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3">
        {t.features.map((feature, i) => {
          const Icon = ICONS[i];
          return (
            <Card key={feature.title} tone="grey" delay={i * 0.08}>
              <IconTile>
                <Icon className="w-5 h-5" />
              </IconTile>
              <h3 className="mb-2 text-xl text-balance">{feature.title}</h3>
              <p className={`text-base leading-relaxed text-pretty ${muted("grey")}`}>{feature.description}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
