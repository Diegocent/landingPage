import { useState, ReactNode } from "react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { BsWhatsapp, BsEnvelope } from "react-icons/bs";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "sonner";

export function DialogUser({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  const translations =
    language === "es" ? esTranslations.dialog : enTranslations.dialog;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleWhatsApp = () => {
    if (!name.trim() || !description.trim()) {
      toast.error(
        language === "es"
          ? "Por favor completa tu nombre y la descripción del proyecto."
          : "Please fill in your name and project description."
      );
      return;
    }
    const text = `Hola Yvagacore! Soy ${name.trim()}.\n\nTengo el siguiente proyecto en mente:\n${description.trim()}`;
    const url = `https://wa.me/595992617942?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleEmail = () => {
    if (!name.trim() || !description.trim()) {
      toast.error(
        language === "es"
          ? "Por favor completa tu nombre y la descripción del proyecto."
          : "Please fill in your name and project description."
      );
      return;
    }
    const subject = `Nuevo Proyecto de ${name.trim()}`;
    const body = `Hola Yvagacore,\n\nSoy ${name.trim()}.\n\nTengo el siguiente proyecto en mente:\n${description.trim()}`;
    const url = `mailto:business@yvagacore.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[450px] w-[95vw] bg-[#1a2126] text-white py-8 px-6 md:px-8 rounded-[30px] border border-white/10 shadow-[0_0_30px_rgba(123,210,225,0.1)]">

        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-teal-300">
              {translations.buttonText}
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              {language === "es"
                ? "Cuéntanos sobre ti y tu idea para empezar a trabajar juntos."
                : "Tell us about yourself and your idea to get started working together."}
            </p>
          </div>

          <div className="w-full space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">
                {translations.name}
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={translations.placeHolderName}
                className="bg-[#0f1418] border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-cyan-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-300">
                {translations.description}
              </Label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={translations.placeHolderDescription}
                rows={4}
                className="w-full rounded-md bg-[#0f1418] border border-white/10 text-white placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 px-3 py-2 text-sm resize-none"
              />
            </div>
          </div>

          <div className="w-full pt-6 border-t border-white/5">
            <p className="mb-4 text-sm text-center text-gray-400">
              {language === "es"
                ? "¿Cómo prefieres enviarnos esta información?"
                : "How would you prefer to send this information?"}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="flex flex-col items-center justify-center gap-2 p-4 transition-colors border rounded-2xl border-[#25D366]/20 bg-[#25D366]/5 hover:bg-[#25D366]/10 group"
              >
                <BsWhatsapp className="w-8 h-8 text-[#25D366] transition-transform group-hover:-rotate-12 group-hover:scale-110" />
                <span className="text-xs font-medium text-[#25D366] md:text-sm">
                  WhatsApp
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmail}
                className="flex flex-col items-center justify-center gap-2 p-4 transition-colors border rounded-2xl border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 group"
              >
                <BsEnvelope className="w-8 h-8 text-cyan-400 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                <span className="text-xs font-medium text-cyan-400 md:text-sm">
                  {language === "es" ? "Correo" : "Email"}
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
