import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import IconCloud from "../ui/icon-cloud";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2"; // Librería para prefijos de país
import "react-phone-input-2/lib/style.css"; // Estilos para PhoneInput

// Validación con Zod
const schema = z.object({
  type: z.enum(["Persona", "Empresa"]).default("Persona"),
  email: z
    .string()
    .email({ message: "Por favor ingresa un correo válido" })
    .min(1, { message: "El campo email es obligatorio" }),
  name: z.string().min(2, { message: "El nombre es obligatorio" }),
  lastName: z.string().min(2, { message: "El apellido es obligatorio" }),
  phone: z.string().min(7, { message: "El teléfono es obligatorio" }),
  description: z
    .string()
    .min(10, { message: "La descripción debe tener al menos 10 caracteres" })
    .max(200, { message: "Máximo 200 caracteres" }),
  companyName: z.string().optional(),
});

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
  const [submitCount, setSubmitCount] = useState(0);
  const maxSubmissions = 3;
  const [contactType, setContactType] = useState("Persona");

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

  const onSubmit = () => {
    if (submitCount < maxSubmissions) {
      setSubmitCount(submitCount + 1);
      // console.log("Datos enviados:", data);
    } else {
      alert("Has alcanzado el límite de envíos.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[750px] text-gray-400 py-2">
        <DialogHeader>
          <DialogTitle className="py-2">Trabajemos Juntos</DialogTitle>
        </DialogHeader>
        <div className="relative flex flex-col items-center justify-center px-6 pb-8 space-y-5">
          {/* Animación de nubes */}
          <div className="max-w-[180px] mb-4">
            <IconCloud iconSlugs={slugs} />
          </div>
          <div className="w-full h-[400px] max-w-sm px-4 overflow-y-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center w-full space-y-4"
            >
              {/* Selector de tipo de contacto */}
              <div className="w-full max-w-sm">
                <Label htmlFor="type" className="text-left">
                  Tipo de Contacto
                </Label>
                <select
                  id="type"
                  {...register("type")}
                  onChange={(e) => setContactType(e.target.value)}
                  className="w-full p-2 mt-1 border rounded"
                >
                  <option value="Persona">Persona</option>
                  <option value="Empresa">Empresa/Entidad</option>
                </select>
              </div>

              {/* Inputs de Nombre y Apellido */}
              <div className="w-full max-w-sm">
                <Label htmlFor="name" className="text-left">
                  Nombre
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Nombre"
                  {...register("name")}
                  className="mt-1"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="w-full max-w-sm">
                <Label htmlFor="lastName" className="text-left">
                  Apellido
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Apellido"
                  {...register("lastName")}
                  className="mt-1"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              {/* Input de teléfono con prefijo */}
              <div className="w-full max-w-sm">
                <Label htmlFor="phone" className="text-left">
                  Teléfono
                </Label>
                <PhoneInput
                  country={"us"}
                  value={""}
                  onChange={(phone) => setValue("phone", phone)}
                  inputStyle={{
                    width: "100%",
                    padding: "0.5rem",
                    paddingLeft: "3.5rem", // Espacio extra para el prefijo y la bandera
                  }}
                  containerStyle={{
                    width: "100%",
                  }}
                  buttonStyle={{
                    borderRight: "1px solid #ccc", // Borde para separar el prefijo
                    paddingRight: "1rem", // Espacio entre bandera y número
                  }}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Input de correo electrónico */}
              <div className="w-full max-w-sm">
                <Label htmlFor="email" className="text-left">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="mt-1"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Input de descripción del proyecto */}
              <div className="w-full max-w-sm">
                <Label htmlFor="description" className="text-left">
                  Descripción del Proyecto
                </Label>
                <Input
                  id="description"
                  type="text"
                  placeholder="Describe brevemente tu proyecto o idea"
                  {...register("description")}
                  className="mt-1"
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Input específico para empresas */}
              {contactType === "Empresa" && (
                <div className="w-full max-w-sm">
                  <Label htmlFor="companyName" className="text-left">
                    Nombre de la Empresa
                  </Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Nombre de la empresa"
                    {...register("companyName")}
                    className="mt-1"
                  />
                </div>
              )}

              {/* Botón de envío */}
              <Button
                type="submit"
                disabled={submitCount >= maxSubmissions}
                className="w-full max-w-sm"
              >
                Suscribirse
              </Button>

              {/* Mensaje de límite de envíos */}
              {submitCount >= maxSubmissions && (
                <p className="mt-2 text-sm text-red-500">
                  Has alcanzado el límite de envíos.
                </p>
              )}
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
