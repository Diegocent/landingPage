import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  MessagesSquare,
  Sparkles,
  LifeBuoy,
  HeartHandshake,
  Telescope,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { useLanguage } from "@/context/LanguageContext";

const team = [
  {
    linkedin: "https://www.linkedin.com/in/tobias-jara-65956a21a/",
    profileImage:
      "https://res.cloudinary.com/dxw29ge49/image/upload/v1778266918/1763436044124_klbuwd.png",
  },
  {
    linkedin: "https://www.linkedin.com/in/diego-villalba-93579418b/",
    profileImage:
      "https://res.cloudinary.com/dply8oqep/image/upload/v1743971568/ukbtfkv9_bir43z.png",
  },
  {
    linkedin: "https://www.linkedin.com/in/alejandro-prieto-990b8628b/",
    profileImage:
      "https://res.cloudinary.com/dply8oqep/image/upload/v1743971568/mw4ye7c1_h5lgxl.png",
  },
  {
    linkedin: "https://www.linkedin.com/in/christian-parzajuk/",
    profileImage:
      "https://res.cloudinary.com/dply8oqep/image/upload/v1743971719/crm93d6j_qicyqe.png",
  },
  {
    linkedin:
      "https://www.linkedin.com/in/micaelamaldonado?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    profileImage:
      "https://res.cloudinary.com/dply8oqep/image/upload/v1743971719/8gtjk70j_itj2xk.png",
  },
  {
    linkedin: "https://www.linkedin.com/in/sam281055/",
    profileImage:
      "https://utfs.io/f/Nbwlwl0eTrfuAZNhND7LcJwQZrPuFDNATIof5H9tdKVkmlSg",
  },
];

const copyEs = {
  label: "Quiénes somos",
  title: "Somos una consultora de software",
  intro:
    "En YvagaCore escuchamos antes de programar: entendemos tu negocio y tus tiempos, y recién ahí proponemos la tecnología adecuada. Acompañamos a empresas desde la idea hasta producción.",
  teamCaption: "El equipo detrás de cada proyecto",
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
      image: "/3dMbarete.png",
      text: "Impresión 3D profesional en Paraguay, con tienda online propia.",
    },
    {
      name: "Menfor Import",
      url: "https://menforimport.com/",
      domain: "menforimport.com",
      image: "/menforImport.png",
      text: "Plataforma web para su operación de importación y comercio.",
    },
    {
      name: "SOME Paraguay",
      url: "https://www.someparaguay.com",
      image: "/SomeParaguay.png",
      text: "Indumentaria deportiva y artículos de gimnasio seleccionados para entrenar con intención."

    }
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
      image: "/3dMbarete.png",
      text: "Professional 3D printing in Paraguay, with its own online store.",
    },
    {
      name: "Menfor Import",
      url: "https://menforimport.com/",
      domain: "menforimport.com",
      image: "/menforImport.png",
      text: "Web platform for their import and trade operation.",
    },
  ],
  ctaTitle: "Got an idea on your mind?",
  ctaButton: "Message us on WhatsApp",
};

const serviceIcons = [Code2, MessagesSquare, Sparkles, LifeBuoy];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const Clientes = () => {
  const { language } = useLanguage();
  const t = language === "es" ? copyEs : copyEn;

  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#060d11]">
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Quiénes somos ── */}
        <motion.div {...fadeIn} className="max-w-3xl mb-16">
          <p className="flex items-center gap-2.5 text-gray-400 text-sm font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-[#7bd2e1]" />
            {t.label}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-5">
            {t.title}
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-7">
            {t.intro}
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center -space-x-2.5">
              {team.map((dev, index) => (
                <a
                  key={index}
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-9 h-9 rounded-full border-2 border-[#060d11] overflow-hidden bg-gray-800 transition-transform duration-300 hover:scale-110 hover:z-10"
                >
                  <img
                    src={dev.profileImage}
                    alt="Team member"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">{t.teamCaption}</p>
          </div>
        </motion.div>

        {/* ── Misión & Visión ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {[
            { icon: HeartHandshake, ...t.mission },
            { icon: Telescope, ...t.vision },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#7bd2e1]/10 text-[#7bd2e1]">
                  <item.icon className="w-[18px] h-[18px]" />
                </div>
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Qué hacemos ── */}
        <motion.div {...fadeIn} className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
            {t.servicesTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
            {t.services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <div key={service.title} className="flex gap-4">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#7bd2e1]/10 text-[#7bd2e1] shrink-0">
                    <Icon className="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Nuestros clientes ── */}
        <motion.div {...fadeIn} className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
            {t.clientsTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.clients.map((client, i) => (
              <motion.a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-[#7bd2e1]/30 transition-colors duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.name}
                    loading="lazy"
                    className="w-full aspect-video object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <h4 className="text-white font-semibold text-lg group-hover:text-[#7bd2e1] transition-colors duration-300">
                      {client.name}
                    </h4>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#7bd2e1] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0" />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {client.text}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {t.visit} · {client.domain}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          {...fadeIn}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.02] px-7 py-6"
        >
          <p className="text-white font-semibold text-lg text-center sm:text-left">
            {t.ctaTitle}
          </p>
          <a
            href="https://wa.me/+595992617942"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#7bd2e1] text-[#060d11] text-sm font-semibold hover:bg-[#9de0ec] transition-colors duration-300 shrink-0"
          >
            <BsWhatsapp className="w-4 h-4" />
            {t.ctaButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
