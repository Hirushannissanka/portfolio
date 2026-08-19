'use client';

import React, { useEffect } from 'react';
import { Box, Typography, Grid, Chip } from '@mui/material';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Sample images (replace with your own)
import BOC from './asserts/BOC-pic.jpg';
import RTL from './asserts/RTL-pic.jpg';
import Reboot from './asserts/Reboot-pic.jpg';
import cryptX from './asserts/cryptX-pic.jpg';
const Experiences = () => {
  const experiences = [
    {
      id: 1,
      position: "Marketing Team Member",
      Event: "Road To Legacy",
      organization: "IEEE student branch USJ",
      image: RTL,
      description: "Contributed to promoting the event through social media campaigns and outreach.",
      skills: ["Digital Marketing", "Content Creation", "Communication"]
    },
    {
      id: 2,
      position: "Logistic Team Member",
      organization: "IEEE Student Branch USJ",
      Event:"Beauty Of Cloud",
      image: BOC,
      description: "Contributed to event logistics, managing venue setup, equipment coordination, and on-site support to ensure smooth execution.",
      skills: ["Event Management", "Team Coordination", ""]
    },
    {
      id: 3,
      position: "Logistic Team Head",
      organization: "IEEE Student Branch USJ",
      Event:"Reeboot",
      image: Reboot,
      description: "Led and coordinated the logistics team, overseeing venue arrangements, technical setup, and operational planning to ensure successful execution of the event.",
      skills: ["Leadership", "Event Logistics", "Team Coordination", "Operational Planning"]
    },
    {
      id: 4,
      position: "Logistic Team Head",
      organization: "ICTS",
      Event:"CryptX 2.0",
      image: cryptX,
      description: "Led and coordinated the logistics team, overseeing venue arrangements, technical setup, and operational planning to ensure successful execution of the event.",
      skills: ["Leadership", "Event Logistics", "Team Coordination", "Operational Planning"]
    }
    
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', px: { xs: 3, md: 8 }, py: 12, color: 'white' }}>
      {/* Section Title */}
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          mb: 10,
          background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        My Experiences
      </Typography>

      {/* Cards Grid */}
      <Grid container spacing={6} justifyContent="center">
        {experiences.map((exp, index) => (
          <Grid item xs={12} md={4} key={exp.id} data-aos="fade-up" data-aos-delay={index * 200}>
            <Box
              sx={{
                height: 460, // fixed height
                width: '100%',
                maxWidth: 400,
                borderRadius: 3,
                overflow: 'hidden',
                backgroundColor: '#161B2A',
                border: '1px solid #23283A',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
                }
              }}
            >
              {/* Image */}
              <Box sx={{ position: 'relative', height: 180 }}>
                <Image
                  src={exp.image}
                  alt={exp.position}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>

              {/* Content */}
              <Box sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {exp.position}
                  </Typography>
                  <Typography variant="body2" color="cyan" sx={{ mb: 1 }}>
                    {exp.Event}
                  </Typography>
                  <Typography variant="body2" color="gray" sx={{ mb: 2, fontSize: 13 }}>
                    {exp.organization}
                  </Typography>
                  <Typography variant="body2" color="gray" sx={{ fontSize: 14, lineHeight: 1.5 }}>
                    {exp.description}
                  </Typography>
                </Box>

                {/* Skills */}
                <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {exp.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: '#1E2435',
                        color: '#3B82F6',
                        fontSize: 12
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experiences;