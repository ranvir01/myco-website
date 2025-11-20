import React from "react";

export const PresidentialLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Eagle Wing Shape */}
    <path d="M20 30C20 30 60 50 100 50C140 50 180 30 180 30C180 30 160 60 100 60C40 60 20 30 20 30Z" fill="#1E40AF" />
    
    {/* Eagle Head Placeholder */}
    <circle cx="100" cy="40" r="10" fill="#1E40AF" />
    <path d="M100 40L115 45L100 50Z" fill="#F59E0B" />

    {/* Text */}
    <text x="100" y="80" textAnchor="middle" fill="#1E3A8A" fontFamily="sans-serif" fontWeight="900" fontSize="20">PRESIDENTIAL</text>
    <text x="100" y="95" textAnchor="middle" fill="#6B7280" fontFamily="sans-serif" fontWeight="300" fontSize="14">TRANSPORTATION</text>
  </svg>
);

