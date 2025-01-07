'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function OrbitalParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(3000 * 3) // 1000 particles * 3 coordinates
    const colors = new Float32Array(3000 * 3)
    
    for (let i = 0; i < positions.length; i += 3) {
      // Random position in a sphere
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      const radius = 2 + Math.random() * 2
      
      positions[i] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i + 2] = radius * Math.cos(phi)
      
      // Color gradient
      colors[i] = 0.5 + Math.random() * 0.5 // R
      colors[i + 1] = 0.2 + Math.random() * 0.3 // G
      colors[i + 2] = 0.8 + Math.random() * 0.2 // B
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geometry
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001
      pointsRef.current.rotation.z += 0.0005
    }
  })

  return (
    <points ref={pointsRef}>
      <primitive object={particlesGeometry} />
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}