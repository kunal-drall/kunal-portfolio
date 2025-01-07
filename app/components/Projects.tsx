'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'

const projects = [
  {
    title: "LearnQuest Sphere",
    description: "A gamified platform for educational content, focusing on interactive learning experiences.",
    github: "https://github.com/kunal-drall/lq-sphere",
    live: "https://lq-sphere.netlify.app/",
    image: "https://i.postimg.cc/gLsPCGcX/lq-sphere.png"
  },
  {
    title: "ChainPay",
    description: "A blockchain-based payment solution that enables secure and fast transactions.",
    github: "https://github.com/kunal-drall/chainpay",
    live: "https://chainpay-agoric.netlify.app/",
    image: "https://i.postimg.cc/zbfMyTqB/chainpay.png"
  },
  {
    title: "Portfolio Site",
    description: "A portfolio site showcasing my work, skills, and professional journey.",
    github: "https://github.com/kunal-drall/kunal-portfolio",
    image: "https://i.postimg.cc/kDzZ5VzJ/portfolio.png"
  },
  {
    title: "More Coming Soon!",
    description: "Exciting new projects in development. Stay tuned!",
    isComingSoon: true
  }
]

export default function Projects() {
  return (
    <section className="w-full py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-righteous mb-16 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <motion.div
                className="relative bg-[#111111] rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Dotted overlay */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  {!project.isComingSoon && project.image && (
                    <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                  )}

                  {project.isComingSoon && (
                    <div className="h-48 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6">
                      <span className="text-2xl text-purple-400">✨</span>
                    </div>
                  )}

                  <h3 className="text-2xl font-righteous text-white">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>

                  {!project.isComingSoon && (
                    <div className="flex space-x-4 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#222222] rounded-md transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="text-purple-400" />
                        <span className="text-white">GitHub</span>
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#222222] rounded-md transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt className="text-blue-400" />
                          <span className="text-white">Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border border-purple-500/20 rounded-lg group-hover:border-purple-500/40 transition-colors" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}