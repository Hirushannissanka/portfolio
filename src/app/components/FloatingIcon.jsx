'use client';
import React from 'react';

const FloatingIcon = React.memo(function FloatingIcon({
  IconComponent,
  size = 30,
  top = '0%',
  left = '0%',
  delay = 1,
  opacity = 1,
}) {
  return (
    <IconComponent
      className="floating-icon"
      style={{
        top,
        left,
        width: size,
        height: size,
        opacity,
        animationDelay: `${delay}s`,
      }}
    />
  );
});

export default FloatingIcon;