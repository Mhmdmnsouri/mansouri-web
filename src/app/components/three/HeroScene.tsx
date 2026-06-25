"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Mesh } from "three";

function SpinningBox() {
  const ref = useRef<Mesh>(null!);
  return (
    <mesh ref={ref} rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial metalness={0.4} roughness={0.2} color="#22d3ee" />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="h-72 w-full overflow-hidden rounded-2xl border border-white/10">
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <SpinningBox />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
