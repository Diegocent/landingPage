import { UserCog, PackageOpen, BellRing } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { Card, IconTile, PillButton, Section, SectionHeader, TextLink, muted } from "@/components/ui/section";

const ICONS = [UserCog, PackageOpen, BellRing];
const APP_URL = "https://tepyx.yvagacore.com/";

export default function DestacarTepyx() {
  const { language } = useLanguage();
  const t = language === "es" ? esTranslations.highlightTepyx : enTranslations.highlightTepyx;

  return (
    <Section tone="white">
      <SectionHeader tone="white" eyebrow={`Tepyx · ${t.eyebrow}`} title={t.title} description={t.description}>
        <PillButton href={APP_URL} external>
          {t.buttons.visitApp}
        </PillButton>
        <TextLink href={APP_URL} external>
          {t.buttons.learnMore}
        </TextLink>
      </SectionHeader>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {t.features.map((feature, i) => {
          const Icon = ICONS[i];
          return (
            <Card key={feature.title} tone="white" delay={i * 0.08}>
              <IconTile>
                <Icon className="w-5 h-5" />
              </IconTile>
              <h3 className="mb-2 text-xl text-balance">{feature.title}</h3>
              <p className={`text-base leading-relaxed text-pretty ${muted("white")}`}>{feature.description}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
