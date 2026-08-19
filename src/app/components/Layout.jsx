'use client'
import React from 'react';
import { Box } from '@mui/material';
import Navbar from './sections/Navbar';
import {
  FaReact, FaPython, FaNodeJs, FaDocker, FaGitAlt,
  FaJava, FaHtml5, FaCss3Alt, FaLinux, FaPhp,
  FaJsSquare, FaDatabase,
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiKubernetes,  } from 'react-icons/si';

/* Generate dots once — stable across renders */
const DOTS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  top:     `${Math.random() * 100}%`,
  left:    `${Math.random() * 100}%`,
  size:    `${(Math.random() * 2 + 1).toFixed(1)}px`,
  opacity: +(Math.random() * 0.5 + 0.2).toFixed(2),
  delay:   `${(Math.random() * 6).toFixed(2)}s`,
  dur:     `${(Math.random() * 3 + 2).toFixed(1)}s`,
}));

const ICON_POOL = [
  FaReact, FaPython, FaNodeJs, FaDocker, FaGitAlt,
  FaJava, FaHtml5, FaCss3Alt, FaLinux, FaPhp,
  FaJsSquare, FaDatabase, SiTypescript, SiMongodb,
  SiKubernetes, 
];

/* Generate 24 icon positions — stable across renders */
const BG_ICONS = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  Icon:    ICON_POOL[i % ICON_POOL.length],
  top:     `${Math.random() * 95}%`,
  left:    `${Math.random() * 95}%`,
  size:    Math.floor(Math.random() * 22) + 20,        // 20 – 42 px
  opacity: +(Math.random() * 0.08 + 0.04).toFixed(2), // 0.04 – 0.12
  rotate:  `${Math.floor(Math.random() * 41) - 20}deg`,  // -20 to +20°
  delay:   `${(Math.random() * 8).toFixed(2)}s`,
  dur:     `${(Math.random() * 4 + 4).toFixed(1)}s`,  // 4 – 8 s
}));

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        background: 'linear-gradient(135deg, #0B0E17, #12151F)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Fixed blinking dots — never scroll with content */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          '@keyframes blink': {
            '0%, 100%': { opacity: 'var(--dot-opacity)' },
            '50%':       { opacity: 0.05 },
          },
          '@keyframes breathe': {
            '0%, 100%': { opacity: 'var(--icon-opacity)', transform: 'rotate(var(--icon-rotate)) scale(1)' },
            '50%':       { opacity: 'calc(var(--icon-opacity) * 0.3)', transform: 'rotate(var(--icon-rotate)) scale(1.1)' },
          },
        }}
      >
        {/* Blinking dots */}
        {DOTS.map((dot) => (
          <Box
            key={`dot-${dot.id}`}
            sx={{
              position: 'absolute',
              top:    dot.top,
              left:   dot.left,
              width:  dot.size,
              height: dot.size,
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              '--dot-opacity': dot.opacity,
              opacity: dot.opacity,
              animation: `blink ${dot.dur} ease-in-out ${dot.delay} infinite`,
            }}
          />
        ))}

        {/* Background tech icons */}
        {BG_ICONS.map((item) => (
          <Box
            key={`icon-${item.id}`}
            sx={{
              position: 'absolute',
              top:  item.top,
              left: item.left,
              '--icon-opacity': item.opacity,
              '--icon-rotate':  item.rotate,
              opacity:   item.opacity,
              transform: `rotate(${item.rotate})`,
              animation: `breathe ${item.dur} ease-in-out ${item.delay} infinite`,
              color: '#ffffff',
              lineHeight: 0,
            }}
          >
            <item.Icon size={item.size} />
          </Box>
        ))}
      </Box>

      <Navbar />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

