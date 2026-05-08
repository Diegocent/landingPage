import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const Clientes = () => {
  const { language } = useLanguage();

  const sectionTitle = language === "es" ? "Nuestros Clientes" : "Our Clients";
  const sectionSubtitle =
    language === "es"
      ? "Empresas que ya confían en nosotros para potenciar su presencia digital."
      : "Companies that already trust us to boost their digital presence.";

  const visitText = language === "es" ? "Visitar sitio" : "Visit site";

  const clients = [
    {
      name: "3D Mbarete",
      url: "https://3dmbarete.com.py",
      image: "/3dMbarete.png",
      description:
        language === "es"
          ? "Impresión 3D profesional en Paraguay. Plataforma industrial, limpia y moderna para servicios de prototipado."
          : "Professional 3D printing in Paraguay. Industrial, clean and modern platform for prototyping services.",
    },
    {
      name: "Menfor Import",
      url: "https://menforimport.com/",
      image: "/menforImport.png",
      description:
        language === "es"
          ? "Importación y distribución de productos. Solución web confiable y profesional para gestión logística y comercio."
          : "Product import and distribution. Reliable and professional web solution for logistics management and trade.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.15 + i * 0.1,
      },
    }),
  };

  return (
    <section className="relative flex flex-col items-center w-full py-24 overflow-hidden bg-[#060d11]">

      {/* Glow principal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7bd2e1]/5 blur-[140px] rounded-full" />

      {/* Grid muy sutil */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#7bd2e1 1px, transparent 1px), linear-gradient(90deg, #7bd2e1 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            variants={fadeInUp}
          >
            <span className="text-[rgb(123,210,225)]">
              {sectionTitle}
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-xl mx-auto"
            variants={fadeInUp}
          >
            {sectionSubtitle}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

          {clients.map((client, i) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={cardVariants}
              className="
                group relative flex flex-col
                rounded-2xl
                border border-white/5
                bg-[#11161a]
                overflow-hidden
                transition-all duration-300
                hover:border-[#7bd2e1]/30
                hover:shadow-[0_12px_40px_rgba(123,210,225,0.08)]
                hover:-translate-y-1
              "
            >
              {/* Image Section */}
              <div className="w-full aspect-video overflow-hidden bg-black/20">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-white font-semibold text-2xl mb-3 transition-colors">
                  {client.name}
                </h3>

                <p className="text-gray-400 text-base leading-relaxed mb-8 flex-1">
                  {client.description}
                </p>

                <div className="flex items-center gap-2 text-[#7bd2e1] font-medium transition-transform group-hover:translate-x-1">
                  {visitText} 
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};