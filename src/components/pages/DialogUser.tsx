import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import IconCloud from "../ui/icon-cloud";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Validación del email con Zod
const schema = z.object({
  email: z
    .string()
    .email({ message: "Por favor ingresa un correo válido" })
    .min(1, { message: "El campo email es obligatorio" }),
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

export function DialogUser({ children }) {
  const [submitCount, setSubmitCount] = useState(0);
  const maxSubmissions = 3; // Limitar a 3 envíos

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    if (submitCount < maxSubmissions) {
      setSubmitCount(submitCount + 1);
      console.log("Correo enviado:", data.email);
    } else {
      alert("Has alcanzado el límite de envíos.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Solicitud</DialogTitle>
        </DialogHeader>
        <div className="relative flex flex-col items-center justify-center px-6 pb-8 space-y-5">
          {/* Animación de nubes */}
          <div className="max-w-[180px]">
            <IconCloud iconSlugs={slugs} />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center w-full"
          >
            <Label htmlFor="email">Correo Electrónico</Label>
            <div className="flex items-center w-full max-w-sm space-x-2">
              {/* Input de email */}
              <Input
                id="email"
                type="email"
                placeholder="Email"
                {...register("email")}
              />
              <Button type="submit" disabled={submitCount >= maxSubmissions}>
                Suscribirse
              </Button>
            </div>

            {/* Mensaje de error */}
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}

            {/* Mensaje de límite */}
            {submitCount >= maxSubmissions && (
              <p className="mt-1 text-sm text-red-500">
                Has alcanzado el límite de envíos.
              </p>
            )}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
