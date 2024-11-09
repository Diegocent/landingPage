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
    title: "Repositorio de scripts",
    image: "/proyectos/repositorio_scripts.png?height=200&width=300",
    link: "https://script-repository.netlify.app",
  },
  {
    id: 5,
    title: "Minimal Ecommerce",
    image: "/proyectos/e_commerce.png?height=200&width=300",
    link: "https://ecommerce-4-jltw.vercel.app/",
  },
];
const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-[#202b31] via-[#202b3135] to-[#202b31] ">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[rgb(123,210,225)] to-[rgb(123,210,225)]">
            Experiencias Digitales
          </h2>
          <p className="text-xl text-gray-300">
            Experimenta nuestras creaciones en uso
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
