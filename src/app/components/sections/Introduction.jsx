'use client'
import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import profilePic from './asserts/profile-pic.jpg';

const Introduction = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Fullstack Developer',
    '3rd Year Undergraduate',
    'DevOps and ML Enthusiast'
  ];

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let timeoutId;

    if (isTyping) {
      if (displayText.length < currentRoleText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentRole]);

  return (
    <Box
      id="introduction"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 6, md: 0 },
        zIndex: 1,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        spacing={{ xs: 6, md: 12 }}
        sx={{
          width: '100%',
          maxWidth: '1200px',
          textAlign: { xs: 'center', md: 'left' },
          position: 'relative',
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: { xs: 250, sm: 320, md: 400 },
            height: { xs: 250, sm: 320, md: 400 },
            position: 'relative',
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.05)' }
          }}
        >
          <Image
            src={profilePic}
            alt="Hansaka"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>

        {/* Text */}
        <Stack spacing={2}>
          <Typography
            sx={{
              fontSize: { xs: '28px', sm: '34px', md: '48px' },
              fontWeight: 700
            }}
          >
            Hi, I am Hansaka
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '18px', sm: '22px', md: '26px' },
              minHeight: '40px',
              color: '#3B82F6'
            }}
          >
            {displayText || roles[0]}
            <span
              style={{
                borderRight: '2px solid white',
                marginLeft: '5px'
              }}
            />
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px', md: '20px' },
              color: '#94A3B8',
              mt: 1
            }}
          >
            I am a 3rd-year undergraduate and aspiring Fullstack Developer with a strong interest in DevOps and Machine Learning. 
            I love learning new technologies, solving challenging problems, and developing projects that make an impact.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Introduction;
