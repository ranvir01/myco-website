"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// Network profile data structure
interface NetworkProfile {
  id: string;
  name: string;
  role: string;
  type: "talent" | "client";
  position: [number, number, number]; // Position on globe
  image?: string;
}

// Sample network profiles - distributed across the globe
const networkProfiles: NetworkProfile[] = [
  // Talents
  { id: "t1", name: "Christy Johnson", role: "Advisor | Strategy", type: "talent", position: [2.3, 0.5, 0.8] },
  { id: "t2", name: "Pim Jitnavasathien", role: "Product Designer", type: "talent", position: [-1.5, 1.2, 1.5] },
  { id: "t3", name: "Sahil Tayade", role: "Cloud Architect", type: "talent", position: [1.8, -0.8, 1.2] },
  { id: "t4", name: "Ha Tien Nguyen", role: "UX Researcher", type: "talent", position: [-0.5, 1.8, 1.0] },
  { id: "t5", name: "Reuben Narad", role: "PhD Student", type: "talent", position: [0.8, -1.5, 1.5] },
  { id: "t6", name: "Sam Foster", role: "Software Architect", type: "talent", position: [-2.0, 0.3, 0.9] },
  { id: "t7", name: "Tawsif Ahmed", role: "Electrical Engineer", type: "talent", position: [1.2, 1.0, -1.6] },
  { id: "t8", name: "Terrell Kelly", role: "Operations", type: "talent", position: [-0.9, -1.0, 1.7] },
  
  // Clients
  { id: "c1", name: "TechCorp Inc", role: "Enterprise SaaS", type: "client", position: [2.1, 0.8, -0.6] },
  { id: "c2", name: "InnovateX", role: "AI & ML", type: "client", position: [-1.8, -0.5, 1.3] },
  { id: "c3", name: "GlobalTrade Co", role: "E-commerce", type: "client", position: [0.6, 1.5, -1.4] },
  { id: "c4", name: "HealthSync", role: "Healthcare Tech", type: "client", position: [-1.2, 1.3, 1.2] },
  { id: "c5", name: "FinanceHub", role: "Financial Services", type: "client", position: [1.5, -1.2, 1.0] },
  { id: "c6", name: "EcoSolutions", role: "Sustainable Tech", type: "client", position: [-0.8, -1.6, 0.9] },
  { id: "c7", name: "DataFlow Systems", role: "Data Analytics", type: "client", position: [0.4, 0.9, -1.9] },
  { id: "c8", name: "CloudVentures", role: "Cloud Infrastructure", type: "client", position: [-1.4, 0.2, -1.6] },
];

// Profile node component with square geometry and popup
function ProfileNode({ 
  profile, 
  onHover, 
  hoveredProfile,
  autoPopupProfile,
  isUserInteracting 
}: { 
  profile: NetworkProfile; 
  onHover: (profile: NetworkProfile | null, position?: [number, number, number]) => void;
  hoveredProfile: NetworkProfile | null;
  autoPopupProfile: NetworkProfile | null;
  isUserInteracting: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const isHovered = hoveredProfile?.id === profile.id;
  const isAutoPopup = !isUserInteracting && autoPopupProfile?.id === profile.id;
  const showPopup = isHovered || isAutoPopup;

  // Clients = darker green, Talents = lighter green with more transparency
  const color = profile.type === "client" ? "#1B7F4E" : "#56B365";
  const opacity = profile.type === "client" ? 0.9 : 0.4;

  return (
    <>
      <mesh
        ref={meshRef}
        position={profile.position}
        onPointerEnter={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover(profile, profile.position);
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={(e) => {
          e.stopPropagation();
          setHovered(false);
          onHover(null);
          document.body.style.cursor = "auto";
        }}
      >
        {/* Square/Box geometry instead of sphere */}
        <boxGeometry args={[0.08, 0.08, 0.08]} />
        <meshStandardMaterial
          color={color}
          transparent={true}
          opacity={showPopup ? 1 : opacity}
          toneMapped={false}
          emissive={color}
          emissiveIntensity={showPopup ? 0.4 : 0.1}
        />
      </mesh>
      
      {/* Compact popup - appears on hover or auto */}
      {showPopup && (
        <Html position={profile.position} center distanceFactor={12}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.25 }}
            className="bg-white/95 backdrop-blur-sm rounded-md shadow-lg p-1.5 pointer-events-none"
            style={{ width: '110px' }}
          >
            <div className="flex flex-col items-center space-y-0.5">
              <div 
                className={`w-6 h-6 rounded flex items-center justify-center text-white font-bold text-[10px] ${
                  profile.type === "client" 
                    ? "bg-gradient-to-br from-green-700 to-green-800" 
                    : "bg-gradient-to-br from-green-500 to-green-600"
                }`}
              >
                {profile.name.split(" ").map(n => n[0]).join("")}
              </div>
              <p className="font-semibold text-gray-900 text-[10px] text-center leading-tight">{profile.name}</p>
              <p className="text-[9px] text-gray-600 text-center leading-tight">{profile.role}</p>
            </div>
          </motion.div>
        </Html>
      )}
    </>
  );
}

// Globe points component
function GlobePoints({ 
  onProfileHover, 
  hoveredProfile,
  autoPopupProfile,
  isUserInteracting 
}: { 
  onProfileHover: (profile: NetworkProfile | null, position?: [number, number, number]) => void;
  hoveredProfile: NetworkProfile | null;
  autoPopupProfile: NetworkProfile | null;
  isUserInteracting: boolean;
}) {
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

      {/* Profile nodes (squares) */}
      {networkProfiles.map((profile) => (
        <ProfileNode 
          key={profile.id} 
          profile={profile} 
          onHover={onProfileHover}
          hoveredProfile={hoveredProfile}
          autoPopupProfile={autoPopupProfile}
          isUserInteracting={isUserInteracting}
        />
      ))}
    </>
  );
}

export default function NetworkGlobe() {
  const [hoveredProfile, setHoveredProfile] = useState<NetworkProfile | null>(null);
  const [autoPopupProfile, setAutoPopupProfile] = useState<NetworkProfile | null>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const handleProfileHover = (profile: NetworkProfile | null, position?: [number, number, number]) => {
    setHoveredProfile(profile);
    // When user hovers, mark as interacting
    if (profile !== null) {
      setIsUserInteracting(true);
    }
  };

  // Auto-popup effect - cycles through profiles randomly
  useEffect(() => {
    if (isUserInteracting) return;

    const showRandomPopup = () => {
      const randomProfile = networkProfiles[Math.floor(Math.random() * networkProfiles.length)];
      setAutoPopupProfile(randomProfile);
      
      // Hide popup after 2.5 seconds
      setTimeout(() => {
        setAutoPopupProfile(null);
      }, 2500);
    };

    // Initial delay before first popup
    const initialTimeout = setTimeout(showRandomPopup, 1500);

    // Set up interval for subsequent popups (every 4-6 seconds)
    const intervalId = setInterval(() => {
      showRandomPopup();
    }, Math.random() * 2000 + 4000); // Random interval between 4-6 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
    };
  }, [isUserInteracting]);

  // Reset user interaction after inactivity
  useEffect(() => {
    if (!isUserInteracting) return;

    const timeout = setTimeout(() => {
      setIsUserInteracting(false);
    }, 8000); // Resume auto-popups after 8 seconds of no interaction

    return () => clearTimeout(timeout);
  }, [isUserInteracting, hoveredProfile]);

  return (
    <div className="w-full aspect-square max-w-[700px] mx-auto relative">
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
        onPointerDown={() => setIsUserInteracting(true)}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2.0} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#56B365" />
        <pointLight position={[0, 10, 5]} intensity={1.0} color="#1B7F4E" />
        
        <GlobePoints 
          onProfileHover={handleProfileHover} 
          hoveredProfile={hoveredProfile}
          autoPopupProfile={autoPopupProfile}
          isUserInteracting={isUserInteracting}
        />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.2}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          enableDamping={true}
          dampingFactor={0.05}
          onChange={() => setIsUserInteracting(true)}
        />
      </Canvas>
    </div>
  );
}
