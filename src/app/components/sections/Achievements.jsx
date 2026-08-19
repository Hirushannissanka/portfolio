'use client';

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import Image from 'next/image';

import Achievement1 from './asserts/Ach-pic1.jpg';
import Achievement2 from './asserts/Ach-pic2.jpg';
import Achievement3 from './asserts/Ach-pic3.jpg';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Best Result of  School',
      description:
        'Achieved the best G.C.E. Advanced Level result in the Technology stream at Taxila Central College, Horana, in 2022.',
      image: Achievement1,
    },
    {
      id: 2,
      title: 'Most Popular Innovation – Ballerina 2025',
      description:
        'As a team, we were recognized with the Most Popular Innovation award at Ballerina 2025 for developing an innovative and impactful solution.',
      image: Achievement2,
    },
    {
      id: 3,
      title: 'Presidential Appreciation Award',
      description:
        'Received the Presidential Appreciation Award for achieving excellent results at the 2022 G.C.E. Advanced Level Examination, recognizing outstanding academic performance.',
      image: Achievement3,
    },
  ];


  const scrollingAchievements = [...achievements, ...achievements];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 12,
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Section Title */}
      <Typography
        sx={{
          fontSize: { xs: 28, md: 42 },
          fontWeight: 700,
          textAlign: 'center',
          mb: 10,
        }}
      >
        Achievements
      </Typography>

      {/* Scrolling Container */}
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            gap: { xs: 3, md: 5 },
            animation: 'scrollAchievements 25s linear infinite',

            '@keyframes scrollAchievements': {
              from: {
                transform: 'translateX(0)',
              },
              to: {
                transform: 'translateX(calc(-50% - 10px))',
              },
            },

            '&:hover': {
              animationPlayState: 'paused',
            },
          }}
        >
          {scrollingAchievements.map((achievement, index) => (
            <Card
              key={`${achievement.id}-${index}`}
              sx={{
                width: {
                  xs: 300,
                  sm: 340,
                  md: 380,
                },
                minWidth: {
                  xs: 300,
                  sm: 340,
                  md: 380,
                },

                backgroundColor: '#161B2A',
                border: '1px solid #23283A',
                borderRadius: 3,
                overflow: 'hidden',

                transition: 'all 0.3s ease',

                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
                  borderColor: '#3B82F6',
                },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: {
                    xs: 190,
                    sm: 210,
                    md: 230,
                  },
                  backgroundColor: '#111827',
                }}
              >
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  style={{
                    objectFit: 'contain',
                    padding: '10px',
                  }}
                />
              </Box>

              {/* Content */}
              <CardContent
                sx={{
                  p: { xs: 3, md: 4 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 18, md: 20 },
                    fontWeight: 600,
                    mb: 2,
                    color: 'white',
                  }}
                >
                  {achievement.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: '#94A3B8',
                  }}
                >
                  {achievement.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Achievements;