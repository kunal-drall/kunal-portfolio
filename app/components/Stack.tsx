'use client'

import { motion } from 'framer-motion'
import { SiReact, SiNextdotjs, SiRust, SiSolidity, SiRubyonrails } from 'react-icons/si'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stackItems = [
  {
    icon: SiReact,
    name: 'React',
    link: 'https://react.dev',
    color: '#61DAFB'
  },
  {
    icon: SiNextdotjs,
    name: 'Next.js',
    link: 'https://nextjs.org',
    color: '#ffffff'
  },
  {
    icon: SiRust,
    name: 'Rust',
    link: 'https://www.rust-lang.org',
    color: '#DEA584'
  },
  {
    icon: SiSolidity,
    name: 'Solidity',
    link: 'https://soliditylang.org',
    color: '#363636'
  },
  {
    icon: SiRubyonrails,
    name: 'Rails',
    link: 'https://rubyonrails.org',
    color: '#CC0000'
  }
]

export default function Stack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false }) // Changed to false to trigger animation every time

  return (
    <section className="w-full flex md:justify-start justify-center px-8 py-20">
      <div className="w-full max-w-md md:ml-16">
        <motion.div 
          ref={ref}
          className="relative overflow-hidden"
          initial={{ 
            scale: 0.8, 
            opacity: 0,
            backgroundColor: '#000000' 
          }}
          animate={{ 
            scale: isInView ? 1 : 0.8, 
            opacity: isInView ? 1 : 0,
            backgroundColor: isInView ? 'rgba(88, 28, 135, 1)' : '#000000'
          }}
          transition={{
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1],
            backgroundColor: { duration: 1.2 }
          }}
        >
          {/* Dotted overlay */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />

          {/* Content container */}
          <div className="relative p-8">
            {/* Title */}
            <h2 className="text-3xl font-righteous mb-8 text-white">
              My Stack
            </h2>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-white">
                I have used <TechPill {...stackItems[0]} /> during my entire career. 
                Lately, <TechPill {...stackItems[1]} /> has been my primary choice for developing backend applications.
              </p>
              
              <p className="text-lg leading-relaxed text-white">
                Currently learning <TechPill {...stackItems[2]} /> and sometimes 
                I code in <TechPill {...stackItems[3]} /> and <TechPill {...stackItems[4]} /> for fun.
              </p>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stackItems.map((tech, index) => (
                <motion.a
                  key={tech.name}
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-black/20 hover:bg-black/30 backdrop-blur-sm transition-all"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' 
                  }}
                >
                  <tech.icon size={24} color={tech.color} />
                  <span className="text-sm font-medium text-white">{tech.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Tech Pill Component
function TechPill({ icon: Icon, name, link, color }: typeof stackItems[0]) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-1 px-2 py-0.5 bg-black/20 hover:bg-black/30 backdrop-blur-sm transition-all"
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)' 
      }}
    >
      <Icon className="text-sm" color={color} />
      <span className="text-sm font-medium text-white">{name}</span>
    </motion.a>
  )
}