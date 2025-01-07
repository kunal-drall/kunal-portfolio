'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const STAR_COUNT = 200

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stars = useRef<Star[]>([])
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    // Initialize stars
    const initStars = () => {
      stars.current = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random()
      }))
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw stars
      stars.current.forEach(star => {
        // Update position
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
        
        // Draw star
        ctx.beginPath()
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      })
      
      // Draw occasional shooting stars
      if (Math.random() < 0.02) {
        const shootingStar = {
          startX: Math.random() * canvas.width,
          startY: 0,
          length: Math.random() * 100 + 50,
          angle: Math.PI / 4, // 45 degrees
          speed: Math.random() * 15 + 5
        }
        
        ctx.beginPath()
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.lineWidth = 2
        ctx.moveTo(shootingStar.startX, shootingStar.startY)
        ctx.lineTo(
          shootingStar.startX + Math.cos(shootingStar.angle) * shootingStar.length,
          shootingStar.startY + Math.sin(shootingStar.angle) * shootingStar.length
        )
        ctx.stroke()
      }
      
      requestAnimationFrame(animate)
    }
    
    // Initialize
    setCanvasSize()
    initStars()
    animate()
    
    // Handle resize
    window.addEventListener('resize', () => {
      setCanvasSize()
      initStars()
    })
    
    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])
  
  return (
    <>
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      
      {/* Star canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full"
        style={{ background: 'black' }}
      />
      
      {/* Additional ambient particles */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.15),transparent_50%)]" />
      </motion.div>
    </>
  )
}