// app/components/SpaceScene/Planet.tsx
'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector2, ShaderMaterial } from 'three'
import { useSpring, animated } from '@react-spring/three'

const fragmentShader = `
  uniform float time;
  uniform vec3 color;
  uniform vec2 mouse;
  varying vec2 vUv;
  
  float circle(vec2 uv, vec2 center, float radius, float blur) {
    float d = length(uv - center);
    float c = smoothstep(radius, radius - blur, d);
    return c;
  }
  
  void main() {
    vec2 uv = vUv;
    vec2 center = vec2(0.5);
    
    // Base planet
    float planet = circle(uv, center, 0.5, 0.01);
    
    // Ripple effect
    float rippleSpeed = time * 2.0;
    float rippleCount = 3.0;
    float rippleWidth = 0.05;
    float rippleStrength = 0.3;
    
    for(float i = 0.0; i < rippleCount; i++) {
      float rippleOffset = i / rippleCount;
      float ripple = sin(length(uv - center) * 30.0 - rippleSpeed + rippleOffset * 6.28) * 0.5 + 0.5;
      ripple *= smoothstep(0.5, 0.4, length(uv - center)) * rippleStrength;
      planet += ripple;
    }
    
    // Mouse interaction
    float mouseEffect = circle(uv, mouse * 0.5 + 0.5, 0.2, 0.1) * 0.3;
    
    // Color gradient
    vec3 planetColor = mix(
      vec3(0.4, 0.2, 0.8), // Purple
      vec3(0.2, 0.4, 0.8), // Blue
      sin(time * 0.5) * 0.5 + 0.5
    );
    
    gl_FragColor = vec4(planetColor * (planet + mouseEffect), 1.0);
  }
`

const vertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

interface PlanetProps {
  mousePosition: Vector2
}

export default function Planet({ mousePosition }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<ShaderMaterial>(null)

  const uniforms = useMemo(() => ({
    time: { value: 0 },
    color: { value: [0.1, 0.1, 0.1] },
    mouse: { value: [0, 0] }
  }), [])

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.getElapsedTime()
      materialRef.current.uniforms.mouse.value = [mousePosition.x, mousePosition.y]
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <sphereGeometry args={[2, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  )
}