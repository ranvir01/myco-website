# 🌍 Network Globe - Exact Replication Code

## Quick Start

### 1. Install Dependencies

```bash
npm install three @react-three/fiber @react-three/drei framer-motion
npm install -D @types/three
```

---

## 2. Complete NetworkGlobe.tsx Code

Copy this entire file to `src/components/Hero/NetworkGlobe.tsx`:

```tsx
"use client";

import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ============================================================
// PROFILE DATA - Customize with your own profiles
// ============================================================
const profiles = [
  { 
    id: 1, 
    name: "Tabletop Village", 
    role: "Gaming & Entertainment", 
    type: "Business" as const,
    image: "/logos/clients/Tabletop_Village_Logo.png"
  },
  { 
    id: 2, 
    name: "Ben Niewiadomski", 
    role: "Strategy Consultant", 
    type: "Consultant" as const,
    image: "/team/ben-niewiadomski.jpg"
  },
  { 
    id: 3, 
    name: "Blue Landscaping Services", 
    role: "Landscaping Services", 
    type: "Business" as const,
    image: "/logos/clients/Blue_Landscaping_Services_Logo.png"
  },
  { 
    id: 4, 
    name: "Pim Jitnavasathien", 
    role: "Product Designer", 
    type: "Consultant" as const,
    image: "/team/pim-jitnavasathien.jpg"
  },
  { 
    id: 5, 
    name: "VopplAR", 
    role: "Artificial Intelligence", 
    type: "Business" as const,
    image: "/logos/clients/VopplAR_Logo.png"
  },
  { 
    id: 6, 
    name: "Ha Tien Nguyen", 
    role: "UX Researcher", 
    type: "Consultant" as const,
    image: "/team/ha-tien-nguyen.jpg"
  },
  { 
    id: 7, 
    name: "Goldstein & Company LLC", 
    role: "Financial Services", 
    type: "Business" as const,
    image: "/logos/clients/Goldstein__Company_Logo.png"
  },
  { 
    id: 8, 
    name: "Jonathan Murguia", 
    role: "Mechanical Engineer", 
    type: "Consultant" as const,
    image: "/team/jonathan-murguia.jpg"
  },
  { 
    id: 9, 
    name: "Gibraltar Business Group", 
    role: "Healthcare", 
    type: "Business" as const,
    image: "/logos/clients/Gibraltar_Business_Group_Logo.png"
  },
  { 
    id: 10, 
    name: "Tawsif Ahmed", 
    role: "Electrical & Computer Engineer", 
    type: "Consultant" as const,
    image: "/team/tawsif-ahmed.jpg"
  },
  { 
    id: 11, 
    name: "Presidential Transportation", 
    role: "Transportation Services", 
    type: "Business" as const,
    image: "/logos/clients/Presidential_Transportation_Logo.png"
  },
  { 
    id: 12, 
    name: "Henos Adhana", 
    role: "SEO Consultant", 
    type: "Consultant" as const,
    image: "/team/henos-adhana.jpg"
  },
  { 
    id: 13, 
    name: "Atlantis STEM", 
    role: "Education & Technology", 
    type: "Business" as const,
    image: "/logos/clients/Atlantis_Steam_Logo.png"
  },
  { 
    id: 14, 
    name: "Ulysses Vazquez-Perez", 
    role: "Business Analyst", 
    type: "Consultant" as const,
    image: "/team/ulysses-vazquez-perez.jpg"
  },
  { 
    id: 15, 
    name: "Shane Blair", 
    role: "Software Engineer", 
    type: "Consultant" as const,
    image: "/team/shane-blair.jpg"
  },
];

// ============================================================
// INTERACTIVE NODE COMPONENT
// ============================================================
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
      // Calculate screen position for tooltip positioning
      const vector = new THREE.Vector3(...position);
      meshRef.current.parent?.localToWorld(vector);
      vector.project(camera);
      
      const x = (vector.x * 0.5 + 0.5) * size.width;
      const y = (-(vector.y * 0.5) + 0.5) * size.height;
      
      onPositionUpdate(profile.id, { x, y });
      
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

// ============================================================
// GLOBE POINTS COMPONENT - Core 3D visualization
// ============================================================
function GlobePoints({ onNodeHover, activeProfile, onPositionUpdate }: { 
  onNodeHover: (profile: typeof profiles[0] | null, screenPos: { x: number; y: number } | null) => void;
  activeProfile: typeof profiles[0] | null;
  onPositionUpdate: (profileId: number, screenPos: { x: number; y: number }) => void;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const nodesGroupRef = useRef<THREE.Group>(null);

  // ============================================================
  // FIBONACCI SPHERE ALGORITHM - Even point distribution
  // ============================================================
  const { positions, connections, interactiveIndices } = useMemo(() => {
    const numPoints = 400;  // Total points on globe
    const positions = new Float32Array(numPoints * 3);
    const connectionsList: number[][] = [];

    // Golden ratio for even distribution
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;

    for (let i = 0; i < numPoints; i++) {
      const t = i / numPoints;
      const inclination = Math.acos(1 - 2 * t);  // Latitude
      const azimuth = angleIncrement * i;         // Longitude

      const radius = 2.3;  // Globe radius
      positions[i * 3] = radius * Math.sin(inclination) * Math.cos(azimuth);
      positions[i * 3 + 1] = radius * Math.sin(inclination) * Math.sin(azimuth);
      positions[i * 3 + 2] = radius * Math.cos(inclination);
    }

    // Create connection lines between nearby points
    for (let i = 0; i < numPoints; i++) {
      for (let j = i + 1; j < numPoints; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 0.55) {  // Connection threshold
          connectionsList.push([i, j]);
        }
      }
    }

    // Select points for interactive profile nodes
    const interactiveIndices: number[] = [];
    const step = Math.floor(numPoints / profiles.length);
    for (let i = 0; i < profiles.length; i++) {
      interactiveIndices.push(i * step + Math.floor(step / 2));
    }

    return { positions, connections: connectionsList, interactiveIndices };
  }, []);

  // Build line geometry
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

  // ============================================================
  // ROTATION ANIMATION - 0.03 radians per frame delta
  // ============================================================
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
      {/* BASE GLOBE POINTS */}
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

      {/* CONNECTION LINES */}
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

      {/* INTERACTIVE PROFILE NODES */}
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

// ============================================================
// MAIN NETWORK GLOBE COMPONENT
// ============================================================
export default function NetworkGlobe() {
  const [hoveredProfile, setHoveredProfile] = useState<typeof profiles[0] | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [autoShowProfile, setAutoShowProfile] = useState<typeof profiles[0] | null>(null);
  const [nodePositions, setNodePositions] = useState<Map<number, { x: number; y: number }>>(new Map());
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoShowIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNodeHover = (profile: typeof profiles[0] | null, screenPos: { x: number; y: number } | null) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    setHoveredProfile(profile);
    setAutoShowProfile(null);
    
    if (screenPos) {
      setTooltipPos(screenPos);
    }

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

  const handleImageError = (profileId: number) => {
    setImageErrors(prev => new Set(prev).add(profileId));
  };

  // Clamp tooltip to container bounds
  const clampTooltipPosition = useCallback((x: number, y: number, tooltipWidth: number = 280, tooltipHeight: number = 140) => {
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

  const hoverTooltipPos = useMemo(() => {
    if (!hoveredProfile) return null;
    return clampTooltipPosition(tooltipPos.x + 10, tooltipPos.y - 80);
  }, [hoveredProfile, tooltipPos, clampTooltipPosition]);

  const autoShowTooltipPos = useMemo(() => {
    if (!autoShowProfile || hoveredProfile || !nodePositions.get(autoShowProfile.id)) return null;
    const nodePos = nodePositions.get(autoShowProfile.id)!;
    return clampTooltipPosition(nodePos.x + 10, nodePos.y - 85, 280, 140);
  }, [autoShowProfile, hoveredProfile, nodePositions, clampTooltipPosition]);

  // ============================================================
  // AUTO-SHOW TOOLTIPS - Random popups every 8-15 seconds
  // ============================================================
  useEffect(() => {
    const showRandomTooltip = () => {
      if (!hoveredProfile) {
        const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];
        setAutoShowProfile(randomProfile);

        setTimeout(() => {
          setAutoShowProfile(null);
        }, 3000);
      }

      const nextDelay = Math.random() * 7000 + 8000;
      autoShowIntervalRef.current = setTimeout(showRandomTooltip, nextDelay);
    };

    const initialTimeout = setTimeout(showRandomTooltip, 5000);

    return () => {
      clearTimeout(initialTimeout);
      if (autoShowIntervalRef.current) {
        clearTimeout(autoShowIntervalRef.current);
      }
    };
  }, [hoveredProfile]);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // ============================================================
  // TOOLTIP RENDER FUNCTION
  // ============================================================
  const renderTooltipContent = (profile: typeof profiles[0], isAutoShow: boolean = false) => {
    const hasImage = profile.image && !imageErrors.has(profile.id);
    const isClientLogo = hasImage && profile.image!.includes('/logos/clients/');
    
    return (
      <div className={`bg-gradient-to-br from-white ${isAutoShow ? 'via-white to-primary/5' : 'to-gray-50/95'} backdrop-blur-md rounded-xl md:rounded-2xl shadow-2xl p-3 md:p-5 min-w-[180px] md:min-w-[260px] border-2 border-primary/20 relative overflow-hidden`}>
        {/* Gradient accent bar */}
        <div className={`absolute top-0 left-0 right-0 ${isAutoShow ? 'h-1.5' : 'h-1'} bg-gradient-to-r from-${profile.type === 'Business' ? 'blue-500' : 'primary'} via-primary-light to-${profile.type === 'Business' ? 'blue-500' : 'primary'}`}></div>
        
        <div className="flex items-start gap-3 md:gap-4">
          {/* Profile Image/Logo */}
          {hasImage && (
            <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden ${isClientLogo ? 'bg-white p-2 md:p-2.5' : 'bg-gradient-to-br from-primary to-primary-light'} shadow-lg relative`}>
              {!isClientLogo && (
                <div 
                  className="absolute inset-0 z-0 opacity-30" 
                  style={{ 
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(27, 127, 78) 1px, transparent 0px)', 
                    backgroundSize: '20px 20px' 
                  }} 
                />
              )}
              <Image 
                src={profile.image!} 
                alt={profile.name} 
                fill={!isClientLogo}
                width={isClientLogo ? 64 : undefined}
                height={isClientLogo ? 64 : undefined}
                sizes="64px"
                className={`${isClientLogo ? 'object-contain w-full h-full' : 'object-cover'} ${!isClientLogo && 'relative z-10'}`}
                onError={() => handleImageError(profile.id)}
              />
            </div>
          )}
          
          {/* Fallback initials if no image */}
          {!hasImage && (
            <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full ${profile.type === 'Business' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gradient-to-br from-primary to-primary-light'} shadow-lg flex items-center justify-center`}>
              <span className="text-white font-bold text-xs md:text-sm">
                {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </span>
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            {/* Type badge */}
            <div className={`inline-flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-bold mb-1.5 md:mb-2 ${
              profile.type === 'Business' 
                ? isAutoShow 
                  ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-700 border-2 border-blue-500/40 shadow-lg shadow-blue-500/20'
                  : 'bg-blue-500/10 text-blue-600 border border-blue-500/30'
                : isAutoShow
                  ? 'bg-gradient-to-r from-primary/20 to-primary-light/20 text-primary border-2 border-primary/40 shadow-lg shadow-primary/20'
                  : 'bg-primary/10 text-primary border border-primary/30'
            }`}>
              <div className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full ${isAutoShow ? 'animate-pulse' : ''} ${
                profile.type === 'Business' ? isAutoShow ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-blue-500' : isAutoShow ? 'bg-primary shadow-lg shadow-primary/50' : 'bg-primary'
              }`} />
              {profile.type}
            </div>
            
            <h4 className="font-bold text-secondary text-xs md:text-base lg:text-lg leading-tight truncate">{profile.name}</h4>
            <p className="text-[10px] md:text-sm text-secondary-light mt-0.5 md:mt-1.5 leading-snug line-clamp-2">{profile.role}</p>
          </div>
        </div>
        
        {/* Decorative corner elements */}
        {isAutoShow && (
          <>
            <div className="absolute bottom-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full"></div>
            <div className="absolute top-0 left-0 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-blue-500/5 to-transparent rounded-br-full"></div>
          </>
        )}
        
        {!isAutoShow && (
          <div className="absolute bottom-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full"></div>
        )}
      </div>
    );
  };
  
  // ============================================================
  // MAIN RENDER
  // ============================================================
  return (
    <div 
      ref={containerRef}
      className="w-full aspect-square max-w-[400px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[800px] max-h-[60vh] md:max-h-[70vh] mx-auto relative"
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 75 }}
        className="cursor-grab active:cursor-grabbing"
        dpr={[1.5, 2]}
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
      
      {/* HOVER TOOLTIP */}
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
            {renderTooltipContent(hoveredProfile, false)}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* AUTO-SHOW TOOLTIP */}
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
            {renderTooltipContent(autoShowProfile, true)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

## 3. Usage in Your Page

```tsx
import dynamic from "next/dynamic";

// IMPORTANT: Disable SSR for Three.js
const NetworkGlobe = dynamic(() => import("./NetworkGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="animate-pulse text-green-500">Loading...</div>
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <NetworkGlobe />
    </section>
  );
}
```

---

## 4. Required Tailwind Colors (tailwind.config.ts)

```typescript
colors: {
  primary: {
    DEFAULT: "#1B7F4E",
    light: "#56B365",
    dark: "#0F5A35",
  },
  secondary: {
    DEFAULT: "#2C3E50",
    light: "#34495E",
  },
}
```

---

## 🎨 Brand Colors Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#1B7F4E` | Main brand, globe points, nodes |
| Primary Light | `#56B365` | Lines, gradients, accents |
| Primary Dark | `#0a4d2e` | Hover states |
| Secondary | `#2C3E50` | Text |
| Blue (Business) | `#3B82F6` | Business type badges |

---

## ⚙️ Animation Parameters

| Parameter | Value | Location |
|-----------|-------|----------|
| Globe Radius | `2.3` | Line ~158 |
| Point Count | `400` | Line ~153 |
| Connection Distance | `0.55` | Line ~171 |
| Rotation Speed | `0.03` rad/delta | Line ~204 |
| Point Size | `0.03` | Line ~219 |
| Point Opacity | `0.4` | Line ~223 |
| Line Opacity | `0.15` | Line ~238 |
| Camera Position | `[0, 0, 4]` | Line ~399 |
| Camera FOV | `75` | Line ~399 |
| Auto-rotate Speed | `0.2` | Line ~416 |
| Auto-popup Delay | `5000ms` first, then `8000-15000ms` | Lines ~358-362 |
| Tooltip Duration | `3000ms` | Line ~355 |

---

## 📦 Package Versions

```json
{
  "three": "^0.160.0",
  "@react-three/fiber": "^8.15.0",
  "@react-three/drei": "^9.88.0",
  "framer-motion": "^10.16.0"
}
```


