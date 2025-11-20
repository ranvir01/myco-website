import React from "react";

export const GibraltarLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Mountain Peak */}
    <path d="M100 10L140 60H60L100 10Z" fill="black" />
    <path d="M140 60L160 70H120L140 60Z" fill="black" />
    <path d="M60 60L40 70H80L60 60Z" fill="black" />
    
    {/* Text */}
    <text x="100" y="85" textAnchor="middle" fill="black" fontFamily="serif" fontWeight="bold" fontSize="24">GIBRALTAR</text>
    <text x="100" y="95" textAnchor="middle" fill="black" fontFamily="sans-serif" fontWeight="normal" fontSize="8" letterSpacing="1">BUSINESS GROUP</text>
  </svg>
);

