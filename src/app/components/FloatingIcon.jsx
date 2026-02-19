'use client';
import React, { useState, useEffect } from 'react';

const FloatingIcon = ({ IconComponent, size = 30, top = '0%', left = '0%', delay = 0, opacity = 1 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Only render on client
  }, []);

  if (!mounted) return null; // Avoid server render

  return (
    <IconComponent
      style={{
        position: 'absolute',
        top:top,
        left:left,
        width: size,
        height: size,
        opacity: opacity, 
        pointerEvents: 'none',
        animation: `breath 4s ease-in-out infinite`,
        //  color: '#3B82F6',
      }}
    />
  );
};

export default FloatingIcon;
