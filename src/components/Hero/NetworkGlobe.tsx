"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

// Sample network profiles
const profiles = [
  { id: 1, name: "Sarah Chen", role: "Product Manager", type: "Talent" },
  { id: 2, name: "John Rodriguez", role: "Software Architect", type: "Talent" },
  { id: 3, name: "Emma Wilson", role: "Data Scientist", type: "Talent" },
  { id: 4, name: "Michael Park", role: "UX Designer", type: "Talent" },
  { id: 5, name: "TechCorp Solutions", role: "Technology Partner", type: "Client" },
  { id: 6, name: "David Kumar", role: "DevOps Engineer", type: "Talent" },
  { id: 7, name: "HealthFirst Medical", role: "Healthcare", type: "Client" },
  { id: 8, name: "Rachel Green", role: "Business Analyst", type: "Talent" },
  { id: 9, name: "FinanceHub", role: "Banking Services", type: "Client" },
  { id: 10, name: "Tom Anderson", role: "Security Expert", type: "Talent" },
  { id: 11, name: "Green Energy Co", role: "Renewable Energy", type: "Client" },
  { id: 12, name: "Lisa Thompson", role: "Marketing Strategist", type: "Talent" },
];

// Interactive node component
function InteractiveNode({ position, profile, onHover, groupRef }: { 
  position: [number, number, number];
  profile: typeof profiles[0];
  onHover: (profile: typeof profiles[0] | null, position: [number, number, number] | null) => void;
  groupRef: React.RefObject<THREE.Group>;
}) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      if (hovered) {
        // Subtle pulsing effect when hovered
        const scale = 1.3 + Math.sin(Date.now() * 0.003) * 0.15;
        meshRef.current.scale.setScalar(scale);
      } else {
        // Reset scale smoothly
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
      
      // Sync rotation with the globe
      if (groupRef.current) {
        meshRef.current.quaternion.copy(groupRef.current.quaternion);
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        onHover(profile, position);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        onHover(null, null);
        document.body.style.cursor = 'auto';
      }}
    >
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial
        color={hovered ? "#10b981" : "#1B7F4E"}
        emissive={hovered ? "#10b981" : "#1B7F4E"}
        emissiveIntensity={hovered ? 0.6 : 0.2}
        transparent
        opacity={hovered ? 1 : 0.5}
        toneMapped={false}
      />
      
      {/* Glow ring when hovered */}
      {hovered && (
        <mesh scale={[1.5, 1.5, 1.5]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial
            color="#10b981"
            transparent
            opacity={0.3}
            toneMapped={false}
          />
        </mesh>
      )}
    </mesh>
  );
}

// Globe points component
function GlobePoints({ onNodeHover }: { 
  onNodeHover: (profile: typeof profiles[0] | null, position: [number, number, number] | null) => void;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const interactiveGroupRef = useRef<THREE.Group>(null);

  // Generate sphere points with some interactive nodes
  const { positions, connections, interactiveIndices } = useMemo(() => {
    const numPoints = 400;
    const positions = new Float32Array(numPoints * 3);
    const connectionsList: number[][] = [];

    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;

    for (let i = 0; i < numPoints; i++) {
      const t = i / numPoints;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;

      const radius = 2.3;
      positions[i * 3] = radius * Math.sin(inclination) * Math.cos(azimuth);
      positions[i * 3 + 1] = radius * Math.sin(inclination) * Math.sin(azimuth);
      positions[i * 3 + 2] = radius * Math.cos(inclination);
    }

    // Create connections
    for (let i = 0; i < numPoints; i++) {
      for (let j = i + 1; j < numPoints; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 0.55) {
          connectionsList.push([i, j]);
        }
      }
    }

    // Select some points to be interactive (evenly distributed)
    const interactiveIndices: number[] = [];
    const step = Math.floor(numPoints / profiles.length);
    for (let i = 0; i < profiles.length; i++) {
      interactiveIndices.push(i * step + Math.floor(step / 2));
    }

    return { positions, connections: connectionsList, interactiveIndices };
  }, []);

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

  // Slower rotation animation
  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.03;
    }
    if (interactiveGroupRef.current) {
      interactiveGroupRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <>
      {/* Base globe points */}
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
          size={0.03}
          color="#1B7F4E"
          sizeAttenuation={true}
          transparent={true}
          opacity={0.4}
          toneMapped={false}
        />
      </points>

      {/* Connection lines */}
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
          opacity={0.15}
          linewidth={1}
          toneMapped={false}
        />
      </lineSegments>

      {/* Interactive nodes group */}
      <group ref={interactiveGroupRef}>
        {interactiveIndices.map((index, i) => {
          const position: [number, number, number] = [
            positions[index * 3],
            positions[index * 3 + 1],
            positions[index * 3 + 2]
          ];
          return (
            <InteractiveNode
              key={i}
              position={position}
              profile={profiles[i]}
              onHover={onNodeHover}
              groupRef={interactiveGroupRef}
            />
          );
        })}
      </group>
    </>
  );
}

// Tooltip component that follows cursor
function HoverTooltip({ profile, mousePos }: { 
  profile: typeof profiles[0];
  mousePos: { x: number; y: number };
}) {
  return (
    <Html>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="pointer-events-none"
        style={{
          position: 'fixed',
          left: mousePos.x + 20,
          top: mousePos.y - 40,
        }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 min-w-[180px] border border-gray-100">
          <h4 className="font-semibold text-secondary text-sm">{profile.name}</h4>
          <p className="text-xs text-secondary-light mt-1">{profile.role}</p>
          <span className="text-xs text-primary/70 font-medium">{profile.type}</span>
        </div>
      </motion.div>
    </Html>
  );
}

export default function NetworkGlobe() {
  const [hoveredProfile, setHoveredProfile] = useState<typeof profiles[0] | null>(null);
  const [hoveredPosition, setHoveredPosition] = useState<[number, number, number] | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNodeHover = (profile: typeof profiles[0] | null, position: [number, number, number] | null) => {
    setHoveredProfile(profile);
    setHoveredPosition(position);
  };
  
  return (
    <div className="w-full aspect-square max-w-[500px] md:max-w-[700px] lg:max-w-[800px] max-h-[70vh] mx-auto relative">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 75 }}
        className="cursor-grab active:cursor-grabbing"
        dpr={[2, 3]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          precision: "highp",
        }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2.0} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#56B365" />
        <pointLight position={[0, 10, 5]} intensity={1.0} color="#1B7F4E" />
        
        <GlobePoints onNodeHover={handleNodeHover} />
        
        {/* Hover tooltip inside canvas */}
        {hoveredProfile && hoveredPosition && (
          <HoverTooltip profile={hoveredProfile} mousePos={mousePos} />
        )}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.2}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
