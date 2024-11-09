import {
  Building,
  CreditCard,
  EyeOff,
  Lock,
  MonitorSmartphone,
  ScanFace,
  Settings,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import { SectionProcesos } from "./components/SectionProcesos";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";

export const Procesos = () => {
  const { language } = useLanguage();
  const translations =
    language === "es" ? esTranslations.process : enTranslations.process;

  return (
    <>
      <SectionProcesos
        //language === "es" ? esTranslations.hero : enTranslations.hero;
        title={translations.services.title}
        subtitle={translations.services.subtitle}
        urlVideo="https://www.youtube.com/embed/la2sSBrI4zo"
        urlImagen="procesos/servicios.png"
        nombreVideo="Hero Video"
        direccion="izquierda"
        features={[
          {
            icon: <Users />,
            title: `${translations.services.card1.title}`,
            description: `${translations.services.card1.description}`,
          },
          {
            icon: <Settings />,
            title: `${translations.services.card2.title}`,
            description: `${translations.services.card2.description}`,
          },
          {
            icon: <MonitorSmartphone />,
            title: `${translations.services.card3.title}`,
            description: `${translations.services.card3.description}`,
          },
          {
            icon: <TrendingUp />,
            title: `${translations.services.card4.title}`,
            description: `${translations.services.card4.description}`,
          },
        ]}
      />
      <SectionProcesos
        title={translations.education.title}
        subtitle={translations.education.subtitle}
        urlVideo="https://www.youtube.com/embed/OfRJpfb5Wdg"
        urlImagen="procesos/educa.png"
        nombreVideo="Hero Video"
        direccion="derecha"
      />
      <SectionProcesos
        title={translations.security.title}
        subtitle={translations.security.subtitle}
        urlVideo="https://www.youtube.com/embed/XE1nt_pokxs"
        urlImagen="procesos/protoring.png"
        nombreVideo="Hero Video"
        direccion="izquierda"
        features={[
          {
            icon: <ScanFace />,
            title: `${translations.security.card1.title}`,
            description: `${translations.security.card1.description}`,
          },
          {
            icon: <EyeOff />,
            title: `${translations.security.card2.title}`,
            description: `${translations.security.card2.description}`,
          },
          {
            icon: <ShieldCheck />,
            title: `${translations.security.card3.title}`,
            description: `${translations.security.card3.description}`,
          },
          {
            icon: <Lock />,
            title: `${translations.security.card4.title}`,
            description: `${translations.security.card4.description}`,
          },
        ]}
      />
      <SectionProcesos
        title={translations.management.title}
        subtitle={translations.management.subtitle}
        urlVideo="https://www.youtube.com/embed/6Q1b_2RWq6Q"
        urlImagen="https://utfs.io/f/Nbwlwl0eTrfuX90QO1GCMJ27oKt5y9NivGzZ4mDHu1YnRjpb"
        nombreVideo="Hero Video"
        direccion="derecha"
      />
      <SectionProcesos
        title={translations.customApps.title}
        subtitle={translations.customApps.subtitle}
        urlVideo=""
        urlImagen=""
        nombreVideo="Hero Video"
        direccion="izquierda"
        esSoloImagenes={true}
        features={[
          {
            icon: <Smartphone />,
            title: `${translations.customApps.card1.title}`,
            description: `${translations.customApps.card1.description}`,
          },
          {
            icon: <Building />,
            title: `${translations.customApps.card2.title}`,
            description: `${translations.customApps.card2.description}`,
          },
          {
            icon: <CreditCard />,
            title: `${translations.customApps.card3.title}`,
            description: `${translations.customApps.card3.description}`,
          },
          {
            icon: <User />,
            title: `${translations.customApps.card4.title}`,
            description: `${translations.customApps.card4.description}`,
          },
        ]}
      />
    </>
  );
};
