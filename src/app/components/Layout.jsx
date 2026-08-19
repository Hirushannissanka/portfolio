'use client'
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Navbar from './sections/Navbar';
import BackgroundIcons from './BackgroundIcons';

const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      <Navbar />

      {/* Render background icons only on client */}
      {mounted && <BackgroundIcons />}

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
