import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import IconCloud from "../ui/icon-cloud";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Textarea } from "@/components/ui/textarea";

// Esquema de validación
const schema = z.object({
  projectName: z
    .string()
    .min(1, { message: "El nombre del proyecto es requerido" }),
  estimatedTime: z
    .number()
    .positive({ message: "El tiempo debe ser un número positivo" }),
  priority: z.enum(["Alta", "Baja"], {
    message: "Debes seleccionar una prioridad",
  }),
  hasBudget: z.boolean(),
  estimatedBudget: z
    .number()
    .positive({ message: "El presupuesto debe ser positivo" })
    .optional()
    .nullable(),
  projectDescription: z
    .string()
    .min(10, { message: "La descripción debe tener al menos 10 caracteres" }), // Validación para la descripción
});

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
  const [hasBudget, setHasBudget] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      projectName: "",
      estimatedTime: "",
      priority: "Alta",
      hasBudget: false,
      estimatedBudget: null,
      projectDescription: "", // Valor por defecto para la descripción
    },
  });

  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
  };

  const priority = watch("priority");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto text-white bg-[#3b505a21]">
        {" "}
        {/* Hacemos que el diálogo pueda hacer scroll */}
        <DialogHeader>
          <DialogTitle>Formulario de solicitud</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex flex-col items-center justify-center max-w-lg px-6 pb-8 space-y-5 border rounded-lg">
            <div className="max-w-[180px]">
              <IconCloud iconSlugs={slugs} />
            </div>

            {/* Nombre del proyecto */}
            <div className="w-full">
              <Label htmlFor="projectName">Nombre del proyecto</Label>
              <Input
                id="projectName"
                type="text"
                {...register("projectName")}
                placeholder="Escribe el nombre de tu proyecto"
              />
              {errors.projectName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.projectName.message}
                </p>
              )}
            </div>

            {/* Tiempo estimado */}
            <div className="w-full">
              <Label htmlFor="estimatedTime">Tiempo estimado (meses)</Label>
              <Input
                id="estimatedTime"
                type="number"
                {...register("estimatedTime", { valueAsNumber: true })}
                placeholder="Ej: 3"
              />
              {errors.estimatedTime && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.estimatedTime.message}
                </p>
              )}
            </div>

            {/* Prioridad */}
            <div className="w-full">
              <Label htmlFor="priority">Prioridad</Label>
              <div className="flex mt-2 space-x-4">
                <Button
                  variant={priority === "Alta" ? "default" : "secondary"}
                  onClick={() => setValue("priority", "Alta")}
                >
                  Alta
                </Button>
                <Button
                  variant={priority === "Baja" ? "default" : "secondary"}
                  onClick={() => setValue("priority", "Baja")}
                >
                  Baja
                </Button>
              </div>
              {errors.priority && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.priority.message}
                </p>
              )}
            </div>

            {/* Presupuesto */}
            <div className="w-full">
              <Label>¿Tienes un presupuesto estimado?</Label>
              <Toggle
                pressed={hasBudget}
                onPressedChange={(pressed) => {
                  setHasBudget(pressed);
                  setValue("hasBudget", pressed);
                  if (!pressed) {
                    setValue("estimatedBudget", null);
                  }
                }}
                className="mt-2"
              >
                {hasBudget ? "Sí" : "No"}
              </Toggle>
            </div>

            {hasBudget && (
              <div className="w-full">
                <Label htmlFor="estimatedBudget">
                  Presupuesto estimado (USD)
                </Label>
                <Input
                  id="estimatedBudget"
                  type="number"
                  {...register("estimatedBudget", { valueAsNumber: true })}
                  placeholder="Ej: 5000"
                />
                {errors.estimatedBudget && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.estimatedBudget.message}
                  </p>
                )}
              </div>
            )}

            {/* Descripción del proyecto */}
            <div className="w-full">
              <Label htmlFor="projectDescription">
                Descripción del proyecto o idea
              </Label>
              <Textarea
                id="projectDescription"
                {...register("projectDescription")}
                placeholder="Describe tu proyecto o idea en detalle"
                rows={4}
              />
              {errors.projectDescription && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.projectDescription.message}
                </p>
              )}
            </div>
          </div>
          <DialogFooter className="flex justify-end py-2">
            <Button type="submit">Enviar solicitud</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
