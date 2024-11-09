import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<Project> = ({ title, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <motion.div
        className="overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900"
        whileHover={{ scale: 1.05, zIndex: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.img
          src={image}
          alt={title}
          className="object-cover w-full h-32"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div className="p-3">
          <h3 className="mb-1 text-sm font-semibold text-white truncate">
            {title}
          </h3>
          <div className="flex items-center text-xs text-[rgb(123,210,225)] hover:text-blue-300 transition-colors">
            <span>Ver demo</span>
            <ExternalLink className="w-3 h-3 ml-1" />
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default ProjectCard;
