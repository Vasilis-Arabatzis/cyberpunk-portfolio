'use client';
import { Canvas } from '@react-three/fiber';
import CyberScene from './CyberScene';

export default function CanvasView() {
  return (
    <Canvas gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 6], fov: 60 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} color="#a855f7" intensity={1} />
      <CyberScene />
    </Canvas>
  );
}