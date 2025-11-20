import React from "react";

export const BlueLandscapingLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Skyline / Needle */}
    <path d="M95 20L100 5L105 20V60H95V20Z" fill="#5EEAD4" />
    <path d="M80 40H120V60H80V40Z" fill="#99F6E4" />
    <path d="M60 50H140V60H60V50Z" fill="#CCFBF1" />
    
    {/* Wreath / Leaves */}
    <path d="M40 80Q20 60 40 40Q50 30 60 40" stroke="#2DD4BF" strokeWidth="3" fill="none" />
    <path d="M160 80Q180 60 160 40Q150 30 140 40" stroke="#2DD4BF" strokeWidth="3" fill="none" />
    
    {/* Leaves Details */}
    <path d="M40 80L30 70M40 70L50 60M40 60L30 50" stroke="#2DD4BF" strokeWidth="2" />
    <path d="M160 80L170 70M160 70L150 60M160 60L170 50" stroke="#2DD4BF" strokeWidth="2" />

    {/* Text */}
    <text x="100" y="85" textAnchor="middle" fill="#0F766E" fontFamily="sans-serif" fontWeight="300" fontSize="32">Blue</text>
    <text x="100" y="98" textAnchor="middle" fill="#14B8A6" fontFamily="sans-serif" fontWeight="300" fontSize="14" letterSpacing="2">LANDSCAPING</text>
  </svg>
);
