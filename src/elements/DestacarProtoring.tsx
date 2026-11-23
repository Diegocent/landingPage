import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ScanFace, FileDown, Lock, Eye, Bot, Play } from "lucide-react";
import { FaWhatsapp, FaEnvelope, FaYoutube } from "react-icons/fa";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";
import {
  Card,
  IconTile,
  PillButton,
  Section,
  SectionHeader,
  SubHeading,
  TextLink,
  muted,
  reveal,
  subtle,
} from "@/components/ui/section";

const FEATURE_ICONS = [ShieldCheck, ScanFace, FileDown];
const BENEFIT_ICONS = [Lock, Eye, Bot];
const VIDEO_ID = "RWi01tPrOrc";

export default function DestacarProtoring() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { language } = useLanguage();
  const t = language === "es" ? esTranslations.highlightProctor : enTranslations.highlightProctor;
  const videoLabel = language === "es" ? "Ver la demo en YouTube" : "Watch the demo on YouTube";

  return (
    <Section tone="white">
      <SectionHeader tone="white" eyebrow="ProctorGuard" title={t.title} description={t.description}>
        <PillButton href="/material/proctorGuard.pdf" download icon={<FileDown className="w-4 h-4" />}>
          {t.cta.button}
        </PillButton>
        <TextLink href={`https://youtu.be/${VIDEO_ID}`} external>
          {videoLabel}
        </TextLink>
      </SectionHeader>

      {/* Features */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {t.features.map((feature, i) => {
          const Icon = FEATURE_ICONS[i];
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

      {/* How it works */}
      <SubHeading>{t.functionProctor}</SubHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {t.steps.map((step, i) => (
          <Card key={step.title} tone="white" delay={i * 0.06} className="p-6">
            <p className={`mb-4 text-sm ${subtle("white")}`}>{String(i + 1).padStart(2, "0")}</p>
            <h4 className="mb-2 text-base text-balance">{step.title}</h4>
            <p className={`text-sm leading-relaxed text-pretty ${muted("white")}`}>{step.description}</p>
          </Card>
        ))}
      </div>

      {/* Video + benefits */}
      <div className="grid items-stretch grid-cols-1 gap-6 mt-24 lg:grid-cols-5">
        <motion.div {...reveal()} className="relative overflow-hidden bg-black lg:col-span-3 rounded-3xl aspect-video lg:aspect-auto lg:min-h-[360px]">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
              title="ProctorGuard demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label={videoLabel}
              className="absolute inset-0 flex items-center justify-center w-full h-full p-0 border-0 rounded-none group bg-black"
            >
              <img
                src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 opacity-80 ease-brand group-hover:opacity-60"
              />
              <span className="relative flex items-center justify-center w-16 h-16 text-black transition-transform duration-300 bg-white rounded-full shadow-xl ease-brand group-hover:scale-105">
                <Play className="w-6 h-6 ml-1 fill-black" />
              </span>
            </button>
          )}
        </motion.div>

        <Card tone="white" className="flex flex-col lg:col-span-2">
          <ul className="flex flex-col flex-1 gap-6">
            {t.benefits.map((benefit, i) => {
              const Icon = BENEFIT_ICONS[i];
              return (
                <li key={benefit.title} className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 text-white bg-black rounded-xl shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base">{benefit.title}</h4>
                    <p className={`text-sm leading-relaxed text-pretty ${muted("white")}`}>{benefit.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="pt-6 mt-8 border-t border-black/10">
            <p className={`mb-4 text-sm ${muted("white")}`}>{t.cta.text}</p>
            <div className="flex items-center gap-2">
              {[
                { href: "https://wa.me/+595992617942", label: "WhatsApp", Icon: FaWhatsapp },
                { href: "mailto:business@yvagacore.com", label: "Email", Icon: FaEnvelope },
                { href: `https://youtu.be/${VIDEO_ID}`, label: "YouTube", Icon: FaYoutube },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-white rounded-full text-neutral-700 ease-brand hover:bg-black hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
