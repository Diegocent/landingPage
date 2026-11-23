import { useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BsWhatsapp, BsEnvelope } from "react-icons/bs";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "sonner";

type DialogUserProps = {
  /** Trigger element. Optional when the dialog is controlled with open/onOpenChange. */
  children?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const FIELD =
  "w-full px-4 text-base text-white transition duration-300 border-0 rounded-xl bg-[#2C2C2E] font-[inherit] placeholder:text-[#8E8E93] outline-none ease-brand focus:bg-[#3A3A3C] focus:ring-2 focus:ring-white/40";

const BUTTON =
  "inline-flex items-center justify-center flex-1 gap-2 h-12 px-6 text-base border-0 rounded-full transition duration-300 ease-brand active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1E]";

export function DialogUser({ children, open, onOpenChange }: DialogUserProps) {
  const { language } = useLanguage();
  const es = language === "es";
  const translations = es ? esTranslations.dialog : enTranslations.dialog;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const isValid = () => {
    if (name.trim() && description.trim()) return true;
    toast.error(
      es
        ? "Por favor completa tu nombre y la descripción del proyecto."
        : "Please fill in your name and project description."
    );
    return false;
  };

  const handleWhatsApp = () => {
    if (!isValid()) return;
    const text = `Hola Yvagacore! Soy ${name.trim()}.\n\nTengo el siguiente proyecto en mente:\n${description.trim()}`;
    window.open(`https://wa.me/595992617942?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleEmail = () => {
    if (!isValid()) return;
    const subject = `Nuevo Proyecto de ${name.trim()}`;
    const body = `Hola Yvagacore,\n\nSoy ${name.trim()}.\n\nTengo el siguiente proyecto en mente:\n${description.trim()}`;
    window.location.href = `mailto:business@yvagacore.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="w-[calc(100vw-32px)] max-w-[480px] gap-0 p-8 md:p-10 text-white bg-[#1C1C1E] border border-white/10 rounded-[28px] sm:rounded-[28px] shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
        <DialogTitle className="pr-10 text-3xl font-normal leading-[1.1] tracking-tight text-white md:text-4xl">
          {translations.buttonText}
        </DialogTitle>
        <DialogDescription className="mt-3 text-base leading-relaxed text-[#8E8E93] text-pretty">
          {es
            ? "Cuéntanos sobre ti y tu idea para empezar a trabajar juntos."
            : "Tell us about yourself and your idea to get started working together."}
        </DialogDescription>

        <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="contact-name" className="block mb-2 text-sm text-white/70">
              {translations.name}
            </label>
            <input
              id="contact-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={translations.placeHolderName}
              autoComplete="name"
              className={`h-12 ${FIELD}`}
            />
          </div>

          <div>
            <label htmlFor="contact-description" className="block mb-2 text-sm text-white/70">
              {translations.description}
            </label>
            <textarea
              id="contact-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={translations.placeHolderDescription}
              rows={4}
              className={`py-3 resize-none leading-relaxed ${FIELD}`}
            />
          </div>
        </form>

        <div className="flex flex-col gap-3 mt-8 sm:flex-row">
          <button type="button" onClick={handleWhatsApp} className={`${BUTTON} text-black bg-white hover:bg-neutral-200`}>
            <BsWhatsapp className="w-4 h-4" />
            WhatsApp
          </button>
          <button
            type="button"
            onClick={handleEmail}
            className={`${BUTTON} text-white bg-[#2C2C2E] hover:bg-[#3A3A3C]`}
          >
            <BsEnvelope className="w-4 h-4" />
            {es ? "Correo" : "Email"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
