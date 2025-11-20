import React from "react";

export const VopplARLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 60"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Box */}
    <rect x="5" y="5" width="190" height="50" stroke="#1E3A8A" strokeWidth="2" fill="white" />
    
    {/* Inner Blue Box */}
    <rect x="10" y="10" width="120" height="40" fill="#1E3A8A" />
    
    {/* Text VOPPL (White on Blue) */}
    <text x="70" y="38" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="bold" fontSize="24">VOPPL</text>
    
    {/* Text AR (Blue/Red on White) */}
    <text x="145" y="38" textAnchor="middle" fill="#1E3A8A" fontFamily="sans-serif" fontWeight="bold" fontSize="24">A</text>
    <text x="165" y="38" textAnchor="middle" fill="#EF4444" fontFamily="sans-serif" fontWeight="bold" fontSize="24">R</text>
  </svg>
);
