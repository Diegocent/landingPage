import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Lightbulb, Shield, Users, Target } from "lucide-react";
import { Card, CardTitle, CardContent } from "../ui/card";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutUsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cardsData = [
    {
      title: "YvagaCore",
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      content:
        '"Yvaga" proviene del guaraní y significa "cielo" o "paraíso", mientras que "Core" representa el núcleo o corazón. En YvagaCore, somos el núcleo de innovación hacia el futuro, ayudando a las empresas a alcanzar su paraíso tecnológico con soluciones robustas y avanzadas.',
    },
    {
      title: "Nuestra Misión",
      icon: <Target className="w-6 h-6 text-white" />,
      content:
        "Somos una microempresa de software dedicada a proporcionar soluciones innovadoras que mejoran la eficiencia operativa de nuestros clientes. Nos especializamos en crear herramientas tecnológicas a medida para resolver los desafíos de las empresas y fomentar su crecimiento.",
    },
    {
      title: "Nuestro Compromiso",
      icon: <Shield className="w-6 h-6 text-white" />,
      content: (
        <ul className="space-y-2 text-gray-300">
          {[
            "Soluciones personalizadas",
            "Innovación constante",
            "Calidad y escalabilidad",
            "Enfoque en el crecimiento del cliente",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <ArrowRight className="w-5 h-5 mr-2 text-blue-400" />
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Nuestro Equipo",
      icon: <Users className="w-6 h-6 text-white" />,
      content: (
        <div className="flex items-start space-x-0">
          {[
            {
              linkedin: "https://www.linkedin.com/in/tobias-jara-65956a21a/",
              profileImage:
                "https://media.licdn.com/dms/image/v2/D4D03AQEbwnnmDa4QTw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707326645744?e=1735171200&v=beta&t=vMuK949s7L22m4K7Vaxd7KsWQTZKOGTIs_nCZkFzpQs",
            },
            {
              linkedin: "https://www.linkedin.com/in/diego-villalba-93579418b/",
              profileImage:
                "https://media.licdn.com/dms/image/v2/C4E03AQH2KGwEKNeBYA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1565014889876?e=1735171200&v=beta&t=10yQ9J4czqqcUgdz17-5dFyb4IKU2aI82JP06-yU0Io",
            },
            {
              linkedin:
                "https://www.linkedin.com/in/alejandro-prieto-990b8628b/",
              profileImage:
                "https://media.licdn.com/dms/image/v2/D4D03AQEyDxSi9aNxBg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727814495905?e=1735171200&v=beta&t=b1qbImqklI_zlyioipDZdnT9QoVonZncP1cRUT34fM0",
            },
            {
              linkedin:
                "https://www.linkedin.com/in/b%C3%A1rbara-galeano-a433a6251?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9JAzYGPsTbOZZtq%2F7kethw%3D%3D",
              profileImage:
                "https://utfs.io/f/Nbwlwl0eTrfubwADsiYw1UaTqoXO328DxyfuMrVA0tKzGERS",
            },
            {
              linkedin: "https://www.linkedin.com/in/christian-parzajuk/",
              profileImage:
                "https://utfs.io/f/Nbwlwl0eTrfufFCShffLDQN32OCnIoKEbxkyq4PvrZLfjTse",
            },
            {
              linkedin:
                "https://www.linkedin.com/in/micaelamaldonado?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              profileImage:
                "https://utfs.io/f/Nbwlwl0eTrfuOpzxWLyZGrR1q5SZcQ7e0EwTACjz6d32yLJn",
            },
            {
              linkedin: "https://www.linkedin.com/in/sam281055/",
              profileImage:
                "https://utfs.io/f/Nbwlwl0eTrfuAZNhND7LcJwQZrPuFDNATIof5H9tdKVkmlSg",
            },
          ].map((dev, index) => (
            <div key={index} className="flex items-center">
              <a
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 overflow-hidden transition-transform duration-200 border-2 border-gray-400 rounded-full hover:scale-105"
              >
                <img
                  src={dev.profileImage}
                  alt={`${dev.profileImage} profile`}
                  className="object-cover w-full h-full"
                />
              </a>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 overflow-hidden min-h-[500px] sm:h-[900px] md:h-[800px] lg:h-[700px] bg-gradient-to-t from-[#202b3135] via-[#202b31] to-[#202b313d]"
    >
      <motion.div
        className="container px-4 mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <motion.div className="mb-16 text-center" variants={fadeInUp}>
          <h2 className="text-4xl font-bold mb-4 text-[rgb(123,210,225)]">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-300">
            Innovación y eficiencia para impulsar tu negocio
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className="group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gradient-to-r from-[#212D35] to-[#25353E] border-none shadow-xl overflow-hidden min-h-[120px] flex flex-col justify-between">
                <motion.div
                  className="flex justify-between p-4 group-hover:bg-transparent"
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CardTitle className="text-2xl font-bold text-white">
                    {card.title}
                  </CardTitle>
                  {card.icon}
                </motion.div>
                <CardContent className="transition-all duration-300 opacity-0 max-h-0 group-hover:max-h-96 group-hover:opacity-100">
                  <p className="text-gray-300">{card.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
