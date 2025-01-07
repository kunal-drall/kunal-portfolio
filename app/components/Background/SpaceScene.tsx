'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import { Vector2 } from 'three'
import Planet from './Planet'
import OrbitalParticles from './OrbitalParticles'

export default function SpaceScene() {
  const [mousePosition, setMousePosition] = useState<Vector2>(new Vector2(0, 0))

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition(new Vector2(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      ))
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Suspense fallback={null}>
          <Planet mousePosition={mousePosition} />
          <OrbitalParticles />
        </Suspense>
      </Canvas>
    </div>
  )
}