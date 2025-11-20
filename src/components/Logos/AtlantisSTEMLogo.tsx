import React from "react";

export const AtlantisSTEMLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Lightbulb Outline */}
    <path d="M70 60C70 30 130 30 130 60C130 80 110 90 110 110H90C90 90 70 80 70 60Z" stroke="black" strokeWidth="2" />
    <path d="M90 110H110V130H90V110Z" stroke="black" strokeWidth="2" />
    <path d="M90 130H110" stroke="black" strokeWidth="2" />
    
    {/* Gear Inside */}
    <circle cx="100" cy="60" r="15" stroke="black" strokeWidth="4" />
    <path d="M100 40V80M80 60H120M86 46L114 74M114 46L86 74" stroke="black" strokeWidth="4" />
    
    {/* Text around */}
    <path id="curve" d="M50 150 Q 100 20 150 150" fill="transparent" />
    <text width="200">
      <textPath href="#curve" textAnchor="middle" startOffset="50%" fill="black" fontSize="24" fontWeight="bold">
        ATLANTIS STEM
      </textPath>
    </text>
  </svg>
);

