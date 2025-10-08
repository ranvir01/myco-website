"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function GlobePoints() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate ULTRA HIGH-QUALITY sphere points - Maximum density
  const { positions, connections } = useMemo(() => {
    const numPoints = 400; // MAXIMUM density for ultra-sharp quality
    const positions = new Float32Array(numPoints * 3);
    const connectionsList: number[][] = [];

    // Create points on sphere surface using Fibonacci sphere algorithm for perfect distribution
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;

    for (let i = 0; i < numPoints; i++) {
      const t = i / numPoints;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;

      const radius = 2.3; // Optimized size for maximum presence
      positions[i * 3] = radius * Math.sin(inclination) * Math.cos(azimuth);
      positions[i * 3 + 1] = radius * Math.sin(inclination) * Math.sin(azimuth);
      positions[i * 3 + 2] = radius * Math.cos(inclination);
    }

    // Create connections between nearby points - optimized for dense network
    for (let i = 0; i < numPoints; i++) {
      for (let j = i + 1; j < numPoints; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 0.55) { // Ultra-tight connections for maximum detail
          connectionsList.push([i, j]);
        }
      }
    }

    return { positions, connections: connectionsList };
  }, []);

  // Create line geometry
  const linePositions = useMemo(() => {
    const linePos = new Float32Array(connections.length * 6);
    connections.forEach((conn, i) => {
      const [p1, p2] = conn;
      linePos[i * 6] = positions[p1 * 3];
      linePos[i * 6 + 1] = positions[p1 * 3 + 1];
      linePos[i * 6 + 2] = positions[p1 * 3 + 2];
      linePos[i * 6 + 3] = positions[p2 * 3];
      linePos[i * 6 + 4] = positions[p2 * 3 + 1];
      linePos[i * 6 + 5] = positions[p2 * 3 + 2];
    });
    return linePos;
  }, [positions, connections]);

  // Rotation animation - Slower and more elegant
  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.08;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <>
      {/* Points - Higher Quality */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#1B7F4E"
          sizeAttenuation={true}
          transparent={true}
          opacity={0.95}
          toneMapped={false}
          depthWrite={true}
        />
      </points>

      {/* Connection Lines - Higher Quality */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#56B365"
          transparent={true}
          opacity={0.5}
          linewidth={2}
          toneMapped={false}
          depthWrite={true}
        />
      </lineSegments>
    </>
  );
}

export default function NetworkGlobe() {
  return (
    <div className="w-full aspect-square max-w-[700px] mx-auto">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 75 }}
        className="cursor-grab active:cursor-grabbing"
        dpr={[3, 4]} // MAXIMUM pixel ratio (3x-4x) for ultra-sharp retina
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          precision: "highp",
          preserveDrawingBuffer: true, // Better quality preservation
          stencil: false, // Performance optimization
          depth: true,
        }}
        shadows
        frameloop="always" // Ensure smooth rendering
      >
        <ambientLight intensity={1.0} />
        <pointLight position={[10, 10, 10]} intensity={2.5} />
        <pointLight position={[-10, -10, -10]} intensity={1.0} color="#56B365" />
        <pointLight position={[0, 10, 5]} intensity={1.2} color="#1B7F4E" />
        <GlobePoints />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}

