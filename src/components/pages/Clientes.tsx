import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const clients = [
  {
    name: "3D Mbarete",
    url: "https://3dmbarete.com.py",
    logo: "/MBARETE 3D.png",
    description: "Impresión 3D profesional en Paraguay",
  },
  {
    name: "Menfor Import",
    url: "https://menforimport.com/",
    logo: "/logoMenforlogo.png",
    description: "Importación y distribución de productos",
  },
];

export const Clientes = () => {
  const { language } = useLanguage();

  const sectionTitle = language === "es" ? "Nuestros Clientes" : "Our Clients";
  const sectionSubtitle =
    language === "es"
      ? "Empresas que ya confían en nosotros"
      : "Companies that already trust us";

  const visitText = language === "es" ? "Visitar sitio" : "Visit site";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">

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
                group relative flex flex-col items-start gap-4
                p-7 rounded-xl
                border border-white/5
                bg-white/[0.03]
                backdrop-blur-md
                transition-all duration-300
                hover:scale-[1.02]
                hover:border-[#7bd2e1]/30
                hover:shadow-[0_12px_40px_rgba(123,210,225,0.12)]
              "
            >
              {/* Glow hover interno */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#7bd2e1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header card */}
              <div className="relative z-10 flex items-center gap-4">

                {/* Logo */}
                <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-[#7bd2e1]/30 transition">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.style.display = "none";
                      const parent = el.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <span style="color:#7bd2e1;font-weight:600;font-size:1rem">
                            ${client.name[0]}
                          </span>
                        `;
                      }
                    }}
                  />
                </div>

                {/* Name */}
                <h3 className="text-white font-semibold text-lg group-hover:text-[#7bd2e1] transition">
                  {client.name}
                </h3>
              </div>

              {/* Description */}
              <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                {client.description}
              </p>

              {/* Link */}
              <span className="relative z-10 text-sm text-[#7bd2e1]/70 group-hover:text-[#7bd2e1] transition">
                {visitText} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};