import React from "react";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#202b31] text-gray-400">
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
              <a href="https://www.instagram.com/yvagacore.tech/" className="text-gray-400 hover:text-white">
                <FaXTwitter className="w-5 h-5" />
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
