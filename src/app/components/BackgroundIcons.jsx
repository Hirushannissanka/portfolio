'use client';
import React, { useEffect, useState } from 'react';
import FloatingIcon from './FloatingIcon';
import {
  FaLinux, FaGithub, FaJava, FaGitAlt, FaDocker,
  FaPython, FaNodeJs, FaPhp, FaHtml5,
  FaCss3Alt, FaJsSquare, FaReact
} from 'react-icons/fa';

const iconComponents = [
  FaGithub, FaLinux, FaJava, FaGitAlt, FaDocker,
  FaPython, FaNodeJs, FaPhp, FaHtml5,
  FaCss3Alt, FaJsSquare, FaReact
];

// Grid + jitter layout so icons spread evenly instead of clumping,
// even when count is much larger than iconComponents.length.
function generateIconLayout(count) {
  const cols = Math.ceil(Math.sqrt(count * 1.4)); // slightly wider than tall
  const rows = Math.ceil(count / cols);
  const cellW = 100 / cols;
  const cellH = 100 / rows;

  return Array.from({ length: count }, (_, i) => {
    const IconComponent = iconComponents[i % iconComponents.length];
    const col = i % cols;
    const row = Math.floor(i / cols);

    const jitterX = (Math.random() - 0.5) * cellW * 0.7;
    const jitterY = (Math.random() - 0.5) * cellH * 0.7;

    const top = Math.min(96, Math.max(4, row * cellH + cellH / 2 + jitterY));
    const left = Math.min(96, Math.max(4, col * cellW + cellW / 2 + jitterX));

    return {
      id: i,
      IconComponent,
      size: Math.floor(Math.random() * 14) + 18, // 18-32px
      top: `${top}%`,
      left: `${left}%`,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.35 + 0.25, // 0.25-0.6, varied depth feel
    };
  });
}

const BackgroundIcons = ({ count = 40 }) => {
  // Client-only random layout to avoid SSR/CSR hydration mismatch.
  const [icons, setIcons] = useState(null);

  useEffect(() => {
    setIcons(generateIconLayout(count));
  }, [count]);

  if (!icons) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-0"
    >
      {icons.map((icon) => (
        <FloatingIcon
          key={icon.id}
          IconComponent={icon.IconComponent}
          size={icon.size}
          top={icon.top}
          left={icon.left}
          delay={icon.delay}
          opacity={icon.opacity}
        />
      ))}
    </div>
  );
};

export default React.memo(BackgroundIcons);