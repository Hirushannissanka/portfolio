'use client'
import { Box, Stack, Typography,IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import profilePic from './asserts/profile-pic.jpg';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const roles = [
  'Fullstack Developer',
  '3rd Year Undergraduate',
  'DevOps and ML Enthusiast'
];
const socialLinks = [
  { icon: <FaGithub size={22} />, url: 'https://github.com/Hirushannissanka', label: 'GitHub' },
  { icon: <FaLinkedin size={22} />, url: 'https://www.linkedin.com/in/hansaka-hirushan-2b98422b7', label: 'LinkedIn' },
  { icon: <FaEnvelope size={22} />, url: '', label: 'Email' }
  
];

const Introduction = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetRole = roles[currentRole];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === targetRole) {
      speed = 2000; // Pause when word is completely typed
    } else if (isDeleting && displayText === '') {
      speed = 400; // Pause when word is completely erased before switching
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < targetRole.length) {
          setDisplayText(targetRole.slice(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

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
        px: { xs: 3, sm: 4, md: 6 },
        pt: { xs: 14, sm: 16, md: 10 },
        pb: { xs: 8, md: 10 },
        zIndex: 1,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        spacing={{ xs: 4, sm: 6, md: 10 }}
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
            width: { xs: 200, sm: 280, md: 360, lg: 400 },
            height: { xs: 200, sm: 280, md: 360, lg: 400 },
            position: 'relative',
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            border: '3px solid rgba(59, 130, 246, 0.3)',
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.03)' }
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
        <Stack spacing={2} sx={{ maxWidth: { xs: '100%', md: '650px' } }}>
          <Typography
            sx={{
              fontSize: { xs: '26px', sm: '34px', md: '44px', lg: '48px' },
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            Hi, I am Hansaka
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '18px', sm: '22px', md: '26px' },
              minHeight: '40px',
              color: '#3B82F6',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}
          >
            {displayText}
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '2px',
                height: { xs: '22px', sm: '26px', md: '30px' },
                backgroundColor: '#3B82F6',
                ml: 0.8,
                animation: 'cursorBlink 1s infinite',
                '@keyframes cursorBlink': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0 }
                }
              }}
            />
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '15px', sm: '17px', md: '19px' },
              color: '#94A3B8',
              lineHeight: 1.7,
              mt: 1
            }}
          >
            I am a 3rd-year undergraduate and aspiring Fullstack Developer with a strong interest in DevOps and Machine Learning. 
            I love learning new technologies, solving challenging problems, and developing projects that make an impact.
          </Typography>
           {/* Social Links */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            sx={{ pt: 2.5 }}
          >
            {socialLinks.map((social, idx) => (
              <IconButton
                key={idx}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  color: '#94A3B8',
                  backgroundColor: '#161B2A',
                  border: '1px solid #23283A',
                  p: 1.5,
                  borderRadius: 2.5,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#3B82F6',
                    borderColor: '#3B82F6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 20px rgba(59, 130, 246, 0.2)'
                  }
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Introduction;
