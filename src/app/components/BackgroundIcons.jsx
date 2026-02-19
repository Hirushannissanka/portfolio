'use client';
import React, { useMemo } from 'react';
import FloatingIcon from './FloatingIcon';
import {
  FaLinux, FaGithub, FaJava, FaGitAlt, FaDocker,
  FaPython, FaNodeJs, FaPhp, FaHtml5,
  FaCss3Alt, FaJsSquare, FaReact
} from 'react-icons/fa';

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
  const icons = useMemo(() => {
    return iconComponents.map(IconComponent => {
      // random top and left with some padding
      const top = Math.random() * 90 + 5; // 5% to 95%
      const left = Math.random() * 90 + 5; // 5% to 95%

      return {
        IconComponent,
        size: Math.floor(Math.random() * 15) + 20, // size 20-35px
        top: `${top}%`,
        left: `${left}%`,
        delay: Math.random() * 5, // animation delay 0-5s
      };
    });
  }, []);

  return (
    <>
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
    </>
  );
};

export default BackgroundIcons;
