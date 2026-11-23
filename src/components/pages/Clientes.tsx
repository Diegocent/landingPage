import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  MessagesSquare,
  Sparkles,
  LifeBuoy,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { useLanguage } from "@/context/LanguageContext";
import { Card, IconTile, PillButton, Section, SectionHeader, SubHeading, muted, reveal, subtle } from "@/components/ui/section";

// Fotos recortadas y optimizadas en public/team. Sin foto: se muestra un monograma.
const team: Array<{ name?: string; linkedin: string; photo?: string }> = [
  { name: "Tobías Jara", linkedin: "https://www.linkedin.com/in/tobias-jara-65956a21a/", photo: "/team/1.webp" },
  { name: "Diego Villalba", linkedin: "https://www.linkedin.com/in/diego-villalba-93579418b/", photo: "/team/2.webp" },
  { name: "Alejandro Prieto", linkedin: "https://www.linkedin.com/in/alejandro-prieto-990b8628b/", photo: "/team/3.webp" },
  { name: "Christian Parzajuk", linkedin: "https://www.linkedin.com/in/christian-parzajuk/", photo: "/team/4.webp" },
  { name: "Micaela Maldonado", linkedin: "https://www.linkedin.com/in/micaelamaldonado", photo: "/team/5.webp" },
  { name: "Samuel Lin", linkedin: "https://www.linkedin.com/in/sam281055/" },
];

const copyEs = {
  label: "Quiénes somos",
  title: "Somos una consultora de software",
  intro:
    "En YvagaCore escuchamos antes de programar: entendemos tu negocio y tus tiempos, y recién ahí proponemos la tecnología adecuada. Acompañamos a empresas desde la idea hasta producción.",
  teamCaption: "El equipo detrás de cada proyecto",
  member: "Integrante",
  mission: {
    title: "Misión",
    text: "Ayudar a empresas y emprendedores a crecer con tecnología bien hecha: útil, mantenible y pensada para durar.",
  },
  vision: {
    title: "Visión",
    text: "Demostrar que desde Paraguay se puede construir software de clase mundial y ser el socio tecnológico de confianza de la región.",
  },
  servicesTitle: "Qué hacemos",
  services: [
    {
      title: "Desarrollo a medida",
      text: "Aplicaciones web y móviles construidas alrededor de tu negocio.",
    },
    {
      title: "Consultoría tecnológica",
      text: "Te ayudamos a decidir qué construir, con qué y cuándo.",
    },
    {
      title: "IA aplicada",
      text: "Automatizamos lo repetitivo para que tu equipo se enfoque en lo importante.",
    },
    {
      title: "Acompañamiento continuo",
      text: "Mantenemos, mejoramos y crecemos con vos después de la entrega.",
    },
  ],
  clientsTitle: "Nuestros clientes",
  visit: "Visitar sitio",
  clients: [
    {
      name: "3D Mbarete",
      url: "https://3dmbarete.com.py",
      domain: "3dmbarete.com.py",
      image: "/clients/3dmbarete.webp",
      text: "Impresión 3D profesional en Paraguay, con tienda online propia.",
    },
    {
      name: "Menfor Import",
      url: "https://menforimport.com/",
      domain: "menforimport.com",
      image: "/clients/menfor-import.webp",
      text: "Plataforma web para su operación de importación y comercio.",
    },
    {
      name: "SOME Paraguay",
      url: "https://www.someparaguay.com",
      domain: "someparaguay.com",
      image: "/clients/some-paraguay.webp",
      text: "Indumentaria deportiva y artículos de gimnasio seleccionados para entrenar con intención.",
    },
  ],
  ctaTitle: "¿Tenés una idea dando vueltas?",
  ctaButton: "Escribinos por WhatsApp",
};

const copyEn = {
  label: "Who we are",
  title: "We are a software consultancy",
  intro:
    "At YvagaCore we listen before we code: we understand your business and your timing, and only then propose the right technology. We walk alongside companies from idea to production.",
  teamCaption: "The team behind every project",
  member: "Team member",
  mission: {
    title: "Mission",
    text: "Help companies and entrepreneurs grow with well-crafted technology: useful, maintainable and built to last.",
  },
  vision: {
    title: "Vision",
    text: "Prove that world-class software can be built from Paraguay and become the region's trusted technology partner.",
  },
  servicesTitle: "What we do",
  services: [
    {
      title: "Custom development",
      text: "Web and mobile applications built around your business.",
    },
    {
      title: "Technology consulting",
      text: "We help you decide what to build, with what, and when.",
    },
    {
      title: "Applied AI",
      text: "We automate the repetitive so your team can focus on what matters.",
    },
    {
      title: "Ongoing partnership",
      text: "We maintain, improve and grow with you after delivery.",
    },
  ],
  clientsTitle: "Our clients",
  visit: "Visit site",
  clients: [
    {
      name: "3D Mbarete",
      url: "https://3dmbarete.com.py",
      domain: "3dmbarete.com.py",
      image: "/clients/3dmbarete.webp",
      text: "Professional 3D printing in Paraguay, with its own online store.",
    },
    {
      name: "Menfor Import",
      url: "https://menforimport.com/",
      domain: "menforimport.com",
      image: "/clients/menfor-import.webp",
      text: "Web platform for their import and trade operation.",
    },
    {
      name: "SOME Paraguay",
      url: "https://www.someparaguay.com",
      domain: "someparaguay.com",
      image: "/clients/some-paraguay.webp",
      text: "Sportswear and gym gear selected for training with purpose.",
    },
  ],
  ctaTitle: "Got an idea on your mind?",
  ctaButton: "Message us on WhatsApp",
};

const serviceIcons = [Code2, MessagesSquare, Sparkles, LifeBuoy];

export const Clientes = () => {
  const { language } = useLanguage();
  const t = language === "es" ? copyEs : copyEn;

  return (
    <Section tone="grey">
      {/* ── Nosotros ── */}
      <SectionHeader tone="grey" eyebrow={t.label} title={t.title} description={t.intro} />

      {/* ── Equipo ── */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 md:gap-6">
        {team.map((dev, i) => (
          <motion.a
            key={dev.linkedin}
            {...reveal(i * 0.05)}
            href={dev.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block group text-neutral-900 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black rounded-3xl"
          >
            <div className="relative overflow-hidden bg-white aspect-[4/5] rounded-3xl isolate [transform:translateZ(0)]">
              {dev.photo ? (
                <img
                  src={dev.photo}
                  alt={dev.name ?? t.member}
                  loading="lazy"
                  className="object-cover w-full h-full transition duration-700 grayscale ease-brand will-change-transform [backface-visibility:hidden] group-hover:grayscale-0 group-hover:scale-[1.04]"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-4xl tracking-tight text-neutral-400">
                  {(dev.name ?? "Y").split(" ").map((p) => p[0]).join("").slice(0, 2)}
                </div>
              )}
            </div>
            <p className="mt-4 text-base leading-tight">{dev.name ?? t.member}</p>
            <p className={`mt-1 inline-flex items-center gap-1 text-sm ${subtle("grey")} group-hover:text-black transition-colors duration-300`}>
              LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
            </p>
          </motion.a>
        ))}
      </div>
      <p className={`mt-6 text-sm ${muted("grey")}`}>{t.teamCaption}</p>

      <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-2">
        {[t.mission, t.vision].map((item, i) => (
          <Card key={item.title} tone="grey" delay={i * 0.08}>
            <p className={`mb-4 text-sm font-medium ${subtle("grey")}`}>{item.title}</p>
            <p className="text-xl leading-relaxed md:text-2xl text-pretty">{item.text}</p>
          </Card>
        ))}
      </div>

      {/* ── Qué hacemos ── */}
      <SubHeading>{t.servicesTitle}</SubHeading>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.services.map((service, i) => {
          const Icon = serviceIcons[i];
          return (
            <Card key={service.title} tone="grey" delay={i * 0.06}>
              <IconTile>
                <Icon className="w-5 h-5" />
              </IconTile>
              <h4 className="mb-2 text-xl text-balance">{service.title}</h4>
              <p className={`text-base leading-relaxed text-pretty ${muted("grey")}`}>{service.text}</p>
            </Card>
          );
        })}
      </div>

      {/* ── Nuestros clientes ── */}
      <SubHeading>{t.clientsTitle}</SubHeading>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.clients.map((client, i) => (
          <motion.a
            key={client.name}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            {...reveal(i * 0.08)}
            className="flex flex-col overflow-hidden text-black bg-white group rounded-3xl transition-[transform,box-shadow] duration-500 ease-brand hover:text-black hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
          >
            {/* Captura del sitio dentro de un marco de navegador simple */}
            <div className="p-3 pb-0 bg-[#F5F5F7] m-3 mb-0 rounded-2xl">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-t-lg">
                <span className="w-2 h-2 rounded-full bg-neutral-300" />
                <span className="w-2 h-2 rounded-full bg-neutral-300" />
                <span className="w-2 h-2 rounded-full bg-neutral-300" />
                <span className="ml-2 text-xs truncate text-neutral-400">{client.domain}</span>
              </div>
              <div className="overflow-hidden">
                <img
                  src={client.image}
                  alt={`Sitio web de ${client.name}`}
                  loading="lazy"
                  className="object-cover object-left-top w-full transition-transform duration-700 origin-top-left aspect-[16/10] ease-brand group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h4 className="text-xl">{client.name}</h4>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 text-neutral-400 shrink-0 ease-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
              </div>
              <p className={`flex-1 text-base leading-relaxed text-pretty ${muted("grey")}`}>{client.text}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* ── CTA ── */}
      <motion.div
        {...reveal()}
        className="flex flex-col items-start justify-between gap-6 p-8 mt-24 text-white bg-black md:flex-row md:items-center rounded-3xl md:p-12"
      >
        <p className="text-2xl tracking-tight md:text-3xl text-balance">{t.ctaTitle}</p>
        <PillButton href="https://wa.me/+595992617942" tone="black" external icon={<BsWhatsapp className="w-4 h-4" />}>
          {t.ctaButton}
        </PillButton>
      </motion.div>
    </Section>
  );
};
