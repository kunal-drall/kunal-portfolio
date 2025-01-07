'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import About from './components/About'
import Stack from './components/Stack'
import SpotifyPlaylist from './components/SpotifyPlaylist'
import Projects from './components/Projects'
import ContactAndFooter from './components/ContactAndFooter'

// Star component with animation
const ShiningStars = () => {
  const [stars, setStars] = useState<{ id: number, style: any }[]>([])

  useEffect(() => {
    const createStar = () => ({
      id: Math.random(),
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`
      }
    })

    const interval = setInterval(() => {
      setStars(prevStars => {
        const newStars = [...prevStars, createStar()]
        if (newStars.length > 5) newStars.shift() // Keep max 5 stars
        return newStars
      })
    }, 600)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {stars.map(star => (
        <motion.span
          key={star.id}
          className="absolute inline-block w-[2px] h-[2px] bg-purple-400"
          style={star.style}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -10, -20]
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut"
          }}
        />
      ))}
    </>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen w-full flex relative z-10">
        <div className="w-full md:w-1/2 flex items-center px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="font-righteous text-6xl md:text-7xl lg:text-8xl">
              Kunal{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                Drall
              </span>
            </h1>
            <p className="font-inter text-xl md:text-2xl max-w-xl leading-relaxed opacity-90">
              Hey! I'm a web developer. I like{' '}
              <span className="text-purple-400">music</span> 🎵,{' '}
              <span className="text-purple-400">programming</span> 👨‍💻,{' '}
              <span className="text-purple-400 relative inline-block">
                stars
                <ShiningStars />
              </span> ✨, and{' '}
              <span className="text-purple-400">cats</span> 🐱
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Stack and Spotify Section */}
      <div className="flex flex-col md:flex-row w-full gap-8 px-8 py-20">
        <div className="w-full md:w-2/3">
          <Stack />
        </div>
        <div className="w-full md:w-1/3">
          <SpotifyPlaylist />
        </div>
      </div>

      {/* Projects Section */}
      <Projects />

      {/* Contact and Footer Section */}
      <ContactAndFooter />
    </>
  )
}