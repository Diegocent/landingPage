import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
}
const projects: Project[] = [
  {
    id: 1,
    title: "Rental Car",
    image: "/proyectos/rental_car.png?height=200&width=300",
    link: "https://my-cars-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Jahata",
    image: "/proyectos/jahata.png?height=200&width=300",
    link: "https://jahataprojectpy.web.app/",
  },
  {
    id: 3,
    title: "Gestor de inventario",
    image: "/proyectos/manage.png?height=200&width=300",
    link: "https://inventory-management-dashboard-orcin.vercel.app/",
  },
  {
    id: 4,
    title: "Proyecto 4",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://proyecto4.com",
  },
  {
    id: 5,
    title: "Proyecto 5",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://proyecto5.com",
  },
  {
    id: 6,
    title: "Proyecto 6",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://proyecto6.com",
  },
];
const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3B505A] to-[#707d83]">
            Nuestros Proyectos
          </h2>
          <p className="text-xl text-gray-300">
            Explora algunas de nuestras soluciones en acción
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
