import React from "react";

export const TabletopVillageLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 120"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Roofs */}
    <path d="M100 20L150 50H50L100 20Z" fill="#22D3EE" stroke="#22D3EE" strokeWidth="5" strokeLinejoin="round" />
    <path d="M40 60L70 80H10L40 60Z" fill="#22D3EE" stroke="#22D3EE" strokeWidth="5" strokeLinejoin="round" />
    <path d="M160 60L190 80H130L160 60Z" fill="#22D3EE" stroke="#22D3EE" strokeWidth="5" strokeLinejoin="round" />
    
    {/* Building Bodies */}
    <rect x="60" y="50" width="80" height="50" fill="#FDE047" stroke="#8B4513" strokeWidth="3" />
    <rect x="20" y="80" width="40" height="30" fill="#FDE047" stroke="#8B4513" strokeWidth="3" />
    <rect x="140" y="80" width="40" height="30" fill="#FDE047" stroke="#8B4513" strokeWidth="3" />
    
    {/* Windows/Details */}
    <path d="M80 50V100M120 50V100M60 75H140" stroke="#8B4513" strokeWidth="3" />
    
    {/* Ribbon Banner */}
    <path d="M10 90L30 110H170L190 90L170 70H30L10 90Z" fill="#F97316" />
    <path d="M10 90L20 115L40 110" fill="#C2410C" />
    <path d="M190 90L180 115L160 110" fill="#C2410C" />
    
    {/* Text */}
    <text x="100" y="98" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="900" fontSize="24" style={{ textShadow: "1px 1px 0 #000" }}>TABLETOP</text>
    <text x="100" y="112" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="bold" fontSize="10">VILLAGE</text>
  </svg>
);
