'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import NeonParticles from './NeonParticles';
import { useMousePosition } from '@/hooks/useMousePosition';

export default function CyberScene() {
  const mouseRef = useMousePosition();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;

    state.camera.position.z = 6 + scrollPercent * 3;
    state.camera.position.y = -scrollPercent * 1.5;
    state.camera.lookAt(0, 0, 0);

    if (groupRef.current) {
      groupRef.current.rotation.z = scrollPercent * Math.PI * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <NeonParticles mouseRef={mouseRef} />
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.25} />
      </mesh>
    </group>
  );
}