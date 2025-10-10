"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// Sample data for network profiles
const talents = [
  { id: 1, name: "Sarah Chen", role: "Product Manager", initials: "SC" },
  { id: 2, name: "John Rodriguez", role: "Software Architect", initials: "JR" },
  { id: 3, name: "Emma Wilson", role: "Data Scientist", initials: "EW" },
  { id: 4, name: "Michael Park", role: "UX Designer", initials: "MP" },
  { id: 5, name: "Lisa Thompson", role: "Marketing Strategist", initials: "LT" },
  { id: 6, name: "David Kumar", role: "DevOps Engineer", initials: "DK" },
  { id: 7, name: "Rachel Green", role: "Business Analyst", initials: "RG" },
  { id: 8, name: "Tom Anderson", role: "Security Expert", initials: "TA" },
];

const clients = [
  { id: 9, name: "TechCorp Solutions", industry: "Technology", initials: "TC" },
  { id: 10, name: "HealthFirst Medical", industry: "Healthcare", initials: "HF" },
  { id: 11, name: "Green Energy Co", industry: "Renewable Energy", initials: "GE" },
  { id: 12, name: "FinanceHub Bank", industry: "Banking", initials: "FH" },
  { id: 13, name: "RetailMax Stores", industry: "Retail", initials: "RM" },
  { id: 14, name: "EduLearn Platform", industry: "Education", initials: "EL" },
  { id: 15, name: "BuildRight Construction", industry: "Construction", initials: "BR" },
  { id: 16, name: "MediaWave Studios", industry: "Entertainment", initials: "MW" },
];

const allProfiles = [...talents, ...clients];

// Profile dot component
function ProfileDot({ profile, position, index, onHover }: {
  profile: typeof allProfiles[0];
  position: [number, number, number];
  index: number;
  onHover: (profile: typeof allProfiles[0] | null) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  
  const isTalent = index < 8;
  const color = isTalent ? "#1B7F4E" : "#0284c7";
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = hovered ? 1.3 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => {
          setHovered(true);
          onHover(profile);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          toneMapped={false}
        />
      </mesh>
      
      {/* Glow effect */}
      {hovered && (
        <mesh scale={[1.5, 1.5, 1.5]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.3}
            toneMapped={false}
          />
        </mesh>
      )}
    </group>
  );
}

// Globe points component
function GlobePoints() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate sphere points
  const { positions, connections } = useMemo(() => {
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

    return { positions, connections: connectionsList };
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
      pointsRef.current.rotation.y += delta * 0.03; // Slowed down from 0.08
    }
    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.03; // Slowed down from 0.08
    }
  });

  return (
    <>
      {/* Base globe points - using squares with varied opacity */}
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
          size={0.035}
          color="#1B7F4E"
          sizeAttenuation={true}
          transparent={true}
          opacity={0.5}
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
          opacity={0.25}
          linewidth={1}
          toneMapped={false}
        />
      </lineSegments>
    </>
  );
}

export default function NetworkGlobe() {
  const [hoveredProfile, setHoveredProfile] = useState<typeof allProfiles[0] | null>(null);
  const [autoPopupProfile, setAutoPopupProfile] = useState<typeof allProfiles[0] | null>(null);
  
  // Profile positions on the globe
  const profilePositions: [number, number, number][] = useMemo(() => {
    const positions: [number, number, number][] = [];
    const radius = 2.4;
    
    // Distribute profiles around the globe
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;
    
    for (let i = 0; i < 16; i++) {
      const t = i / 16;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;
      
      positions.push([
        radius * Math.sin(inclination) * Math.cos(azimuth),
        radius * Math.sin(inclination) * Math.sin(azimuth),
        radius * Math.cos(inclination)
      ]);
    }
    
    return positions;
  }, []);
  
  // Auto popup effect
  useEffect(() => {
    const interval = setInterval(() => {
      const randomProfile = allProfiles[Math.floor(Math.random() * allProfiles.length)];
      setAutoPopupProfile(randomProfile);
      
      setTimeout(() => {
        setAutoPopupProfile(null);
      }, 3000);
    }, 8000);
    
    // First popup after 2 seconds
    const timeout = setTimeout(() => {
      const randomProfile = allProfiles[Math.floor(Math.random() * allProfiles.length)];
      setAutoPopupProfile(randomProfile);
      
      setTimeout(() => {
        setAutoPopupProfile(null);
      }, 3000);
    }, 2000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  
  return (
    <div className="w-full aspect-square max-w-[500px] md:max-w-[700px] lg:max-w-[800px] max-h-[70vh] mx-auto relative">
      {/* Legend */}
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#1B7F4E]" />
            <span className="text-secondary">Talents</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#0284c7]" />
            <span className="text-secondary">Clients</span>
          </div>
        </div>
      </div>
      
      {/* Hover Tooltip */}
      {hoveredProfile && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-4 right-4 z-10 bg-white rounded-xl shadow-xl p-4 min-w-[200px]"
        >
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
              hoveredProfile.id <= 8 ? 'bg-[#1B7F4E]' : 'bg-[#0284c7]'
            }`}>
              {hoveredProfile.initials}
            </div>
            <div>
              <h4 className="font-semibold text-secondary">{hoveredProfile.name}</h4>
              <p className="text-sm text-secondary-light">
                {'role' in hoveredProfile ? hoveredProfile.role : hoveredProfile.industry}
              </p>
              <span className={`text-xs font-medium ${
                hoveredProfile.id <= 8 ? 'text-[#1B7F4E]' : 'text-[#0284c7]'
              }`}>
                {hoveredProfile.id <= 8 ? 'Talent' : 'Client'}
              </span>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Auto Popup */}
      {autoPopupProfile && !hoveredProfile && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="absolute bottom-4 left-4 z-10 bg-white rounded-xl shadow-xl p-4 min-w-[200px]"
        >
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
              autoPopupProfile.id <= 8 ? 'bg-[#1B7F4E]' : 'bg-[#0284c7]'
            }`}>
              {autoPopupProfile.initials}
            </div>
            <div>
              <h4 className="font-semibold text-secondary">{autoPopupProfile.name}</h4>
              <p className="text-sm text-secondary-light">
                {'role' in autoPopupProfile ? autoPopupProfile.role : autoPopupProfile.industry}
              </p>
              <span className={`text-xs font-medium ${
                autoPopupProfile.id <= 8 ? 'text-[#1B7F4E]' : 'text-[#0284c7]'
              }`}>
                {autoPopupProfile.id <= 8 ? 'Talent' : 'Client'}
              </span>
            </div>
          </div>
        </motion.div>
      )}
      
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
        
        <GlobePoints />
        
        {/* Profile dots */}
        {allProfiles.map((profile, index) => (
          <ProfileDot
            key={profile.id}
            profile={profile}
            position={profilePositions[index]}
            index={index}
            onHover={setHoveredProfile}
          />
        ))}
        
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
