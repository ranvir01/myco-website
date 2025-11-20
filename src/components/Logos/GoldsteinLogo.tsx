import React from "react";

export const GoldsteinLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 80"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stylized G */}
    <path d="M40 40C40 20 60 20 60 20M40 40C40 60 60 60 60 60H70V40H60" stroke="#D4AF37" strokeWidth="4" fill="none" />
    
    {/* Text */}
    <text x="80" y="35" fill="#1F2937" fontFamily="serif" fontWeight="bold" fontSize="24">GOLDSTEIN</text>
    <text x="80" y="55" fill="#6B7280" fontFamily="sans-serif" fontWeight="normal" fontSize="12">& COMPANY LLC</text>
  </svg>
);

