import {
  Building,
  CreditCard,
  MonitorSmartphone,
  Settings,
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
        title={translations.services.title}
        subtitle={translations.services.subtitle}
        urlVideo="https://www.youtube.com/embed/la2sSBrI4zo"
        urlImagen="procesos/IMG_1225.JPEG.jpg"
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
        urlImagen="procesos/IMG_1226.JPEG.jpg"
        nombreVideo="Hero Video"
        direccion="derecha"
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
        title={translations.management.title}
        subtitle={translations.management.subtitle}
        urlVideo="https://www.youtube.com/embed/6Q1b_2RWq6Q"
        urlImagen="procesos/IMG_1227.JPEG.jpg"
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
        title={translations.customApps.title}
        subtitle={translations.customApps.subtitle}
        urlVideo=""
        urlImagen=""
        nombreVideo="Hero Video"
        direccion="derecha"
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
