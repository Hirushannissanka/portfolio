'use client';
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
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
      {/* Navbar stays on top */}
      <Box sx={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
      </Box>

      {/* Background icons behind everything */}
      {mounted && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1, // behind navbar and children
          }}
        >
          <BackgroundIcons />
        </Box>
      )}

      {/* Main content (children) */}
      <Box sx={{ position: 'relative', zIndex: 5, padding: 2 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
