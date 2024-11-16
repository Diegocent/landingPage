import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import IconCloud from "../ui/icon-cloud";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";
import axios from "axios";

// Slugs para animación de IconCloud
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function DialogUser({ children }: { children: ReactNode }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [contactType, setContactType] = useState("Persona");
  const { language } = useLanguage();
  const translations =
    language === "es" ? esTranslations.dialog : enTranslations.dialog;

  // Validación con Zod
  const schema = z.object({
    type: z.enum(["Persona", "Empresa"]).default("Persona"),
    email: z
      .string()
      .email({ message: `${translations.error.email}` })
      .min(1, { message: `${translations.error.minEmail}` }),
    name: z.string().min(2, { message: `${translations.error.name}` }),
    lastName: z.string().min(2, { message: `${translations.error.lastName}` }),
    phone: z.string().min(7, { message: `${translations.error.phone}` }),
    description: z
      .string()
      .min(10, { message: `${translations.error.minDescription}` })
      .max(200, { message: `${translations.error.maxDescription}` }),
    companyName: z.string().optional(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      type: "Persona",
      email: "",
      name: "",
      lastName: "",
      phone: "",
      description: "",
      companyName: "",
    },
  });

  interface FormData {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    description: string;
    companyName?: string;
    type: string;
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true); // Inicia el estado de envío
    const formData = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      description: data.description,
      companyName: data.companyName || "",
      type: data.type,
    };

    const formUrl =
      "https://mail-service-express-git-fea-449b0f-sl281055-gmailcoms-projects.vercel.app/api/send-email";

    try {
      // Usamos axios para hacer la solicitud POST
      const response = await axios.post(formUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Si necesitas enviar cookies o credenciales
      });

      if (response.status === 200) {
        setIsSubmitted(true); // Marca el formulario como enviado
      } else {
        alert("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      alert("Hubo un error al enviar el formulario.");
    } finally {
      setIsSubmitting(false); // Finaliza el estado de envío
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="sm:max-w-[500px] bg-gray-800 text-white py-2 rounded-[30px] shadow-lg"
        style={{
          borderRadius: "30px",
          border: "3px solid rgb(156 240 255 / 42%)",
        }}
      >
        <div className="relative flex flex-col items-center justify-center px-4 pb-6 space-y-4">
          <DialogClose
            asChild
            className="absolute p-2 text-gray-300 rounded-full top-3 right-3"
            style={{
              color: "rgb(156,240,255)",
              backgroundColor: "transparent",
              transition: "none",
            }}
          >
            ✕
          </DialogClose>
          <div className="max-w-[150px] mb-3">
            <IconCloud iconSlugs={slugs} />
          </div>
          <div className="w-full h-[300px] max-w-sm px-3 overflow-y-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center w-full p-3 space-y-3 bg-gray-800 rounded-md"
            >
              <div className="w-full max-w-xs">
                <Label htmlFor="type" className="text-left">
                  {translations.type}
                </Label>
                <select
                  id="type"
                  {...register("type")}
                  onChange={(e) => setContactType(e.target.value)}
                  className="w-full p-2 mt-1 text-black bg-white border rounded"
                >
                  <option value="Persona">{translations.Individual}</option>
                  <option value="Empresa">{translations.Enterprise}</option>
                </select>
              </div>

              <div className="w-full max-w-xs">
                <Label htmlFor="name" className="text-left">
                  {translations.name}
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={translations.placeHolderName}
                  {...register("name")}
                  className="mt-1"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="w-full max-w-xs">
                <Label htmlFor="lastName" className="text-left">
                  {translations.lastname}
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder={translations.placeHolderLastname}
                  {...register("lastName")}
                  className="mt-1"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-xs">
                <Label htmlFor="phone" className="text-left">
                  {translations.phone}
                </Label>
                <PhoneInput
                  country={"py"}
                  value={""}
                  onChange={(phone) => setValue("phone", phone)}
                  inputStyle={{
                    width: "100%",
                    padding: "0.5rem",
                    paddingLeft: "3.5rem",
                    color: "black",
                    backgroundColor: "white",
                  }}
                  containerStyle={{
                    width: "100%",
                  }}
                  buttonStyle={{
                    borderRight: "1px solid #ccc",
                    paddingRight: "1rem",
                  }}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-xs">
                <Label htmlFor="email" className="text-left">
                  {translations.mail}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={translations.placeHolderMail}
                  {...register("email")}
                  className="mt-1"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-xs">
                <Label htmlFor="description" className="text-left">
                  {translations.description}
                </Label>
                <Input
                  id="description"
                  type="text"
                  placeholder={translations.placeHolderDescription}
                  {...register("description")}
                  className="mt-1"
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {contactType === "Empresa" && (
                <div className="w-full max-w-xs">
                  <Label htmlFor="companyName" className="text-left">
                    {translations.nameEnterprise}
                  </Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder={translations.placeHolderEnterprise}
                    {...register("companyName")}
                    className="mt-1"
                  />
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full max-w-xs"
                style={{
                  backgroundColor: "rgb(156,240,255)",
                  color: "black",
                }}
              >
                {isSubmitting
                  ? translations.sendingText
                  : isSubmitted
                  ? translations.sentText
                  : translations.buttonText}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
