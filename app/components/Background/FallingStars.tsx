// app/components/Background/FallingStars.tsx
'use client'

import { motion } from 'framer-motion'

interface FallingStarsProps {
  count: number
}

export default function FallingStars({ count }: FallingStarsProps) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-gradient-to-r from-purple-400 to-transparent rounded-full"
          initial={{
            x: `${Math.random() * 100}%`,
            y: -10,
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: '100vh',
            x: `${Math.random() * 100}%`,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}