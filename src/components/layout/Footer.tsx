import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-gray-400">
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
        {/* Contenedor principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <h2 className="text-2xl font-[Promethean] cursor-pointer text-white mb-4">
              YvagaCore Group
            </h2>
            <p className="text-sm">
              YvagaCore combina yvaga, que significa cielo en guaraní, y core,
              que representa el núcleo, simbolizando nuestro compromiso de guiar
              a las empresas hacia su paraíso tecnológico.
            </p>
          </div>

          {/* Nuestro Equipo */}
          <div>
            <h3 className="font-semibold text-white mb-4">Nuestro Equipo</h3>
            <div className="flex items-start space-x-0">
          {[
            {
              linkedin: "https://www.linkedin.com/in/tobias-jara-65956a21a/",
              profileImage:
                "https://res.cloudinary.com/dply8oqep/image/upload/v1743971568/3ncbw8p7_eyu1ul.png",
            },
            {
              linkedin: "https://www.linkedin.com/in/diego-villalba-93579418b/",
              profileImage:
                "https://res.cloudinary.com/dply8oqep/image/upload/v1743971568/ukbtfkv9_bir43z.png",
            },
            {
              linkedin:
                "https://www.linkedin.com/in/alejandro-prieto-990b8628b/",
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
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-sm">© 2024 Yvagacore™</p>

            {/* Íconos de redes sociales */}
            <div className="mt-4 sm:mt-0 flex space-x-6">
              <a href="https://www.instagram.com/yvagacore.tech/" className="text-gray-400 hover:text-white">
                <BsFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/yvagacore.tech/" className="text-gray-400 hover:text-white">
                <BsInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@Yvagacore" className="text-gray-400 hover:text-white">
                <BsYoutube className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/yvagacore.tech/" className="text-gray-400 hover:text-white">
                <BsGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
