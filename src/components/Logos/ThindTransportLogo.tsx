import React from "react";

export const ThindTransportLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Truck Cab */}
    <path d="M40 60H120V30H60L40 60Z" fill="#DC2626" />
    <rect x="120" y="20" width="60" height="40" fill="#DC2626" />
    
    {/* Wheels */}
    <circle cx="60" cy="60" r="10" fill="#333" />
    <circle cx="140" cy="60" r="10" fill="#333" />
    <circle cx="160" cy="60" r="10" fill="#333" />
    
    {/* Window */}
    <path d="M65 35H115V55H55L65 35Z" fill="#E5E7EB" />
    
    {/* Text */}
    <text x="100" y="85" textAnchor="middle" fill="#DC2626" fontFamily="sans-serif" fontWeight="bold" fontSize="18">THIND</text>
    <text x="100" y="98" textAnchor="middle" fill="#1F2937" fontFamily="sans-serif" fontWeight="bold" fontSize="12">TRANSPORT</text>
  </svg>
);

