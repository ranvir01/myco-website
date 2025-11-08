"use client";

import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

// Real network profiles - Mixed clients and consultants (always shown)
const profiles = [
  { id: 1, name: "Tabletop Village", role: "Gaming & Entertainment", type: "Business" },
  { id: 2, name: "Christy Johnson", role: "Advisor | Strategy", type: "Expert" },
  { id: 3, name: "Blue Landscaping", role: "Landscaping Services", type: "Business" },
  { id: 4, name: "Pim Jitnavasathien", role: "Product Designer", type: "Expert" },
  { id: 5, name: "VOPPL AR", role: "Augmented Reality Tech", type: "Business" },
  { id: 6, name: "Sahil Tayade", role: "Cloud Architect", type: "Expert" },
  { id: 7, name: "Goldstein & Company LLC", role: "Financial Services", type: "Business" },
  { id: 8, name: "Reuben Narad", role: "PhD - Operations", type: "Expert" },
  { id: 9, name: "Gibraltar Business Group", role: "Business Consulting", type: "Business" },
  { id: 10, name: "Sam Foster", role: "Software Architect", type: "Expert" },
  { id: 11, name: "Presidential Transpo", role: "Transportation Services", type: "Business" },
  { id: 12, name: "Ha Tien Nguyen", role: "UX Researcher", type: "Expert" },
  { id: 13, name: "Atlantis STEM", role: "Education & Technology", type: "Business" },
  { id: 14, name: "Tawsif Ahmed", role: "Electrical Engineer", type: "Expert" },
  { id: 15, name: "Terrell Kelly", role: "Operations Consultant", type: "Expert" },
  { id: 16, name: "JD Kaim", role: "Software Engineer", type: "Expert" },
];

// Interactive node component
function InteractiveNode({ position, profile, onHover, isActive, onPositionUpdate }: { 
  position: [number, number, number];
  profile: typeof profiles[0];
  onHover: (profile: typeof profiles[0] | null, screenPos: { x: number; y: number } | null) => void;
  isActive: boolean;
  onPositionUpdate: (profileId: number, screenPos: { x: number; y: number }) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera, size } = useThree();
  const isHighlighted = hovered || isActive;
  
  useFrame(() => {
    if (meshRef.current) {
      // Always calculate and update screen position for this node
      const vector = new THREE.Vector3(...position);
      meshRef.current.parent?.localToWorld(vector);
      vector.project(camera);
      
      const x = (vector.x * 0.5 + 0.5) * size.width;
      const y = (-(vector.y * 0.5) + 0.5) * size.height;
      
      // Update position for this profile
      onPositionUpdate(profile.id, { x, y });
      
      // If hovered, also call the hover callback
      if (hovered) {
        onHover(profile, { x, y });
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
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        onHover(null, null);
        document.body.style.cursor = 'auto';
      }}
    >
      <sphereGeometry args={[0.035, 16, 16]} />
      <meshStandardMaterial
        color={isHighlighted ? "#0a4d2e" : "#1B7F4E"}
        emissive={isHighlighted ? "#0a4d2e" : "#1B7F4E"}
        emissiveIntensity={isHighlighted ? 0.6 : 0}
        transparent={true}
        opacity={isHighlighted ? 1 : 0}
        toneMapped={false}
      />
    </mesh>
  );
}

// Globe points component
function GlobePoints({ onNodeHover, activeProfile, onPositionUpdate }: { 
  onNodeHover: (profile: typeof profiles[0] | null, screenPos: { x: number; y: number } | null) => void;
  activeProfile: typeof profiles[0] | null;
  onPositionUpdate: (profileId: number, screenPos: { x: number; y: number }) => void;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const nodesGroupRef = useRef<THREE.Group>(null);

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
    if (nodesGroupRef.current) {
      nodesGroupRef.current.rotation.y += delta * 0.03;
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

      {/* Interactive nodes */}
      <group ref={nodesGroupRef}>
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
              isActive={activeProfile?.id === profiles[i].id}
              onPositionUpdate={onPositionUpdate}
            />
          );
        })}
      </group>
    </>
  );
}

export default function NetworkGlobe() {
  const [hoveredProfile, setHoveredProfile] = useState<typeof profiles[0] | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [autoShowProfile, setAutoShowProfile] = useState<typeof profiles[0] | null>(null);
  const [nodePositions, setNodePositions] = useState<Map<number, { x: number; y: number }>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoShowIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNodeHover = (profile: typeof profiles[0] | null, screenPos: { x: number; y: number } | null) => {
    // Clear any existing timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    setHoveredProfile(profile);
    setAutoShowProfile(null); // Clear auto-show when user manually hovers
    
    if (screenPos) {
      setTooltipPos(screenPos);
    }

    // Auto-hide tooltip after 2.5 seconds
    if (profile) {
      hideTimeoutRef.current = setTimeout(() => {
        setHoveredProfile(null);
      }, 2500);
    }
  };

  const handlePositionUpdate = (profileId: number, screenPos: { x: number; y: number }) => {
    setNodePositions(prev => {
      const newMap = new Map(prev);
      newMap.set(profileId, screenPos);
      return newMap;
    });
  };

  // Helper function to clamp tooltip position within container bounds
  const clampTooltipPosition = useCallback((x: number, y: number, tooltipWidth: number = 220, tooltipHeight: number = 120) => {
    if (!containerRef.current) return { x, y };
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const minX = 10;
    const maxX = containerRect.width - tooltipWidth - 10;
    const minY = 10;
    const maxY = containerRect.height - tooltipHeight - 10;
    
    return {
      x: Math.max(minX, Math.min(maxX, x)),
      y: Math.max(minY, Math.min(maxY, y))
    };
  }, []);

  // Calculate clamped position for hover tooltip
  const hoverTooltipPos = useMemo(() => {
    if (!hoveredProfile) return null;
    return clampTooltipPosition(tooltipPos.x + 10, tooltipPos.y - 80);
  }, [hoveredProfile, tooltipPos, clampTooltipPosition]);

  // Calculate clamped position for auto-show tooltip
  const autoShowTooltipPos = useMemo(() => {
    if (!autoShowProfile || hoveredProfile || !nodePositions.get(autoShowProfile.id)) return null;
    const nodePos = nodePositions.get(autoShowProfile.id)!;
    return clampTooltipPosition(nodePos.x + 10, nodePos.y - 85, 240, 140);
  }, [autoShowProfile, hoveredProfile, nodePositions, clampTooltipPosition]);

  // Random auto-show tooltips
  useEffect(() => {
    const showRandomTooltip = () => {
      // Only show if user is not currently hovering
      if (!hoveredProfile) {
        // Randomly select a profile
        const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];
        setAutoShowProfile(randomProfile);

        // Hide after 3 seconds
        setTimeout(() => {
          setAutoShowProfile(null);
        }, 3000);
      }

      // Schedule next random popup between 8-15 seconds
      const nextDelay = Math.random() * 7000 + 8000;
      autoShowIntervalRef.current = setTimeout(showRandomTooltip, nextDelay);
    };

    // First popup after 5 seconds
    const initialTimeout = setTimeout(showRandomTooltip, 5000);

    return () => {
      clearTimeout(initialTimeout);
      if (autoShowIntervalRef.current) {
        clearTimeout(autoShowIntervalRef.current);
      }
    };
  }, [hoveredProfile]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="w-full aspect-square max-w-[500px] md:max-w-[700px] lg:max-w-[800px] max-h-[70vh] mx-auto relative"
    >
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
        
        <GlobePoints 
          onNodeHover={handleNodeHover} 
          activeProfile={hoveredProfile || autoShowProfile}
          onPositionUpdate={handlePositionUpdate}
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
        />
      </Canvas>
      
      {/* Hover tooltip at exact node position - Enhanced Design */}
      <AnimatePresence>
        {hoveredProfile && hoverTooltipPos && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute pointer-events-none z-10"
            style={{
              left: `${hoverTooltipPos.x}px`,
              top: `${hoverTooltipPos.y}px`,
              transform: 'translateX(-50%)',
            }}
          >
            <div className="bg-gradient-to-br from-white to-gray-50/95 backdrop-blur-md rounded-xl shadow-2xl p-4 min-w-[200px] border-2 border-primary/20 relative overflow-hidden">
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary"></div>
              
              {/* Type badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                hoveredProfile.type === 'Business' 
                  ? 'bg-blue-500/10 text-blue-600 border border-blue-500/30' 
                  : 'bg-primary/10 text-primary border border-primary/30'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  hoveredProfile.type === 'Business' ? 'bg-blue-500' : 'bg-primary'
                }`} />
                {hoveredProfile.type}
              </div>
              
              <h4 className="font-bold text-secondary text-base leading-tight">{hoveredProfile.name}</h4>
              <p className="text-sm text-secondary-light mt-1.5 leading-snug">{hoveredProfile.role}</p>
              
              {/* Subtle bottom decoration */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Auto-show tooltip at node position - Enhanced Design */}
      <AnimatePresence>
        {autoShowProfile && !hoveredProfile && autoShowTooltipPos && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.75, y: 25 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute pointer-events-none z-10"
            style={{
              left: `${autoShowTooltipPos.x}px`,
              top: `${autoShowTooltipPos.y}px`,
              transform: 'translateX(-50%)',
            }}
          >
            <div className="bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-lg rounded-2xl shadow-2xl p-5 min-w-[220px] border-2 border-primary/30 relative overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-50"></div>
              
              {/* Glowing top border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              
              <div className="relative z-10">
                {/* Type badge with glow effect */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-3 ${
                  autoShowProfile.type === 'Business' 
                    ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-700 border-2 border-blue-500/40 shadow-lg shadow-blue-500/20' 
                    : 'bg-gradient-to-r from-primary/20 to-primary-light/20 text-primary border-2 border-primary/40 shadow-lg shadow-primary/20'
                }`}>
                  <div className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                    autoShowProfile.type === 'Business' ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-primary shadow-lg shadow-primary/50'
                  }`} />
                  {autoShowProfile.type}
                </div>
                
                <h4 className="font-bold text-secondary text-lg leading-tight mb-2">{autoShowProfile.name}</h4>
                <p className="text-sm text-secondary-light leading-relaxed">{autoShowProfile.role}</p>
              </div>
              
              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full"></div>
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-500/5 to-transparent rounded-br-full"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
