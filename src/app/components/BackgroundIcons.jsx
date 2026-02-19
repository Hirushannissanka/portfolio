'use client';

import React, { useMemo } from 'react';
import FloatingIcon from './FloatingIcon';
import {
  FaLinux, FaGithub, FaJava, FaGitAlt, FaDocker,
  FaPython, FaNodeJs, FaPhp, FaHtml5,
  FaCss3Alt, FaJsSquare, FaReact
} from 'react-icons/fa';

// Array of all icon components
const iconComponents = [
  FaGithub,
  FaLinux,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaNodeJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact
];

const BackgroundIcons = () => {
  // useMemo ensures icons are calculated once on client
  const icons = useMemo(() => {
    const rows = 5;   // number of horizontal grid rows
    const cols = 5;   // number of vertical grid columns
    const totalCells = rows * cols;
    const cells = Array.from({ length: totalCells }, (_, i) => i);

    // Shuffle cells
    for (let i = cells.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cells[i], cells[j]] = [cells[j], cells[i]];
    }

    // Map each icon to a position in the grid
    return iconComponents.map((IconComponent, idx) => {
      const cellIndex = cells[idx % totalCells];
      const row = Math.floor(cellIndex / cols);
      const col = cellIndex % cols;

      // Random offset inside the cell for natural spread
      const top = row * (100 / rows) + Math.random() * (100 / rows - 10) + 5;
      const left = col * (100 / cols) + Math.random() * (100 / cols - 10) + 5;

      return {
        IconComponent,
        size: Math.floor(Math.random() * 15) + 20, // 20-35px
        top: `${top}%`,
        left: `${left}%`,
        delay: Math.random() * 5, // animation delay 0-5s
      };
    });
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {icons.map((icon, i) => (
        <FloatingIcon
          key={i}
          IconComponent={icon.IconComponent}
          size={icon.size}
          top={icon.top}
          left={icon.left}
          delay={icon.delay}
        />
      ))}
    </div>
  );
};

export default BackgroundIcons;
