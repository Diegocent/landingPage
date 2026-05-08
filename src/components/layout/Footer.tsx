import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsYoutube, BsEnvelope, BsWhatsapp } from "react-icons/bs";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const translations = language === "es" ? esTranslations.footer : enTranslations.footer;

  const team = [
    {
      linkedin: "https://www.linkedin.com/in/tobias-jara-65956a21a/",
      profileImage: "https://res.cloudinary.com/dxw29ge49/image/upload/v1778266918/1763436044124_klbuwd.png",
    },
    {
      linkedin: "https://www.linkedin.com/in/diego-villalba-93579418b/",
      profileImage: "https://res.cloudinary.com/dply8oqep/image/upload/v1743971568/ukbtfkv9_bir43z.png",
    },
    {
      linkedin: "https://www.linkedin.com/in/alejandro-prieto-990b8628b/",
      profileImage: "https://res.cloudinary.com/dply8oqep/image/upload/v1743971568/mw4ye7c1_h5lgxl.png",
    },
    {
      linkedin: "https://www.linkedin.com/in/christian-parzajuk/",
      profileImage: "https://res.cloudinary.com/dply8oqep/image/upload/v1743971719/crm93d6j_qicyqe.png",
    },
    {
      linkedin: "https://www.linkedin.com/in/micaelamaldonado?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      profileImage: "https://res.cloudinary.com/dply8oqep/image/upload/v1743971719/8gtjk70j_itj2xk.png",
    },
    {
      linkedin: "https://www.linkedin.com/in/sam281055/",
      profileImage: "https://utfs.io/f/Nbwlwl0eTrfuAZNhND7LcJwQZrPuFDNATIof5H9tdKVkmlSg",
    },
  ];

  return (
    <footer className="bg-[#03070a] text-gray-400 py-16 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Logo & Description */}
          <div className="md:col-span-5 lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-[Promethean] text-white tracking-widest flex items-center gap-2">
                YVAGACORE <span className="text-gray-300 font-medium">GROUP</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-gray-400">
              {translations.description}
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-6">
            <h3 className="font-bold text-white tracking-wider text-sm">{translations.contact}</h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:business@yvagacore.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#7bd2e1]/10 group-hover:text-[#7bd2e1] transition-all">
                  <BsEnvelope className="w-4 h-4" />
                </div>
                <span className="text-sm">business@yvagacore.com</span>
              </a>
              <a href="https://wa.me/+595992617942" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#7bd2e1]/10 group-hover:text-[#7bd2e1] transition-all">
                  <BsWhatsapp className="w-4 h-4" />
                </div>
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-6">
            <h3 className="font-bold text-white tracking-wider text-sm">{translations.followUs}</h3>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/yvagacore.tech/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7bd2e1]/10 hover:text-[#7bd2e1] transition-all">
                <BsInstagram className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/yvagacore.tech/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7bd2e1]/10 hover:text-[#7bd2e1] transition-all">
                <BsFacebook className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@Yvagacore" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7bd2e1]/10 hover:text-[#7bd2e1] transition-all">
                <BsYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider & Bottom Section */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Yvagacore™. {translations.rights}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">{translations.team}</span>
            <div className="flex items-center -space-x-3">
              {team.map((dev, index) => (
                <a
                  key={index}
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#03070a] overflow-hidden transition-transform hover:scale-110 hover:z-10 bg-gray-800"
                >
                  <img
                    src={dev.profileImage}
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
