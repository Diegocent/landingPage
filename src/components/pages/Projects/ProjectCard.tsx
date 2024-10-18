import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
interface Project {
    id: number
    title: string
    image: string
    link: string
  }

const ProjectCard: React.FC<Project> = ({ title, image, link }) => {
    return (
      <motion.div
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg"
        whileHover={{ scale: 1.05, zIndex: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-32 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div className="p-3">
          <h3 className="text-sm font-semibold text-white mb-1 truncate">{title}</h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            Ver demo
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </div>
      </motion.div>
    )
  }

export default ProjectCard;