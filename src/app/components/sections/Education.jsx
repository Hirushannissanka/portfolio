'use client';

import { Box, Stack, Typography, Card, CardContent } from '@mui/material';
import React from 'react';


const Education = () => {

  const educationData = [
    {
      id: 1,
      title: "G.C.E Ordinary Level",
      institute: "Wadduwa Central College",
      period: "2019",
      description: "6A's, 2B's, and 1C "
    },
    {
      id: 2,
      title: "G.C.E Advanced Level",
      institute: "Taxila Central College",
      period: "2022",
      description: "3A's ,Kalluthara District Rank 1, Island Rank 9 in Technology Stream"
    },
    {
      id: 3,
      title: "ICM",
      institute: "Institute of Computer Engineering Technology",
      period: "2023",
      description: "Completed the Institute of Computer Engineering Technology course with distinction."
    },
    {
      id: 4,
      title: "Bachelor of Information Communication Technology",
      institute: "University of Sri Jayewardenepura",
      period: "2024 - Present",
      description: "undergraduate student specializing in Information Communication Technology, with a focus on software development, data science, and emerging technologies. Actively engaged in coursework and projects that enhance technical skills and industry knowledge."
    }
  ];

  return (
    <Box
      id="education"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        px: { xs: 2, sm: 4, md: 6 },
        py: 8
      }}
    >
      <Stack spacing={8} sx={{ width: '100%', maxWidth: '1000px' }}>

        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: '28px', sm: '34px', md: '48px' },
            fontWeight: 700,
            textAlign: 'center'
          }}
        >
          Education
        </Typography>

        {/* Timeline Items */}
        {educationData.map((item, index) => {

          const isLeft = index % 2 === 0;

          return (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end'
              }}
            >
              <Card
                sx={{
                  width: { xs: '100%', md: 450 },
                  height: 280,
                  borderRadius: 4,
                  backgroundColor: '#1A1F2E',   // slightly lighter than bg
                  border: '1px solid #23283A',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
                  }
                }}
              >
                <CardContent>

                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#3B82F6'
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography sx={{ color: '#94A3B8', mt: 1 }}>
                    {item.institute}
                  </Typography>

                  <Typography sx={{ color: '#94A3B8', mb: 2 }}>
                    {item.period}
                  </Typography>

                  <Typography sx={{ color: '#CBD5E1' }}>
                    {item.description}
                  </Typography>

                </CardContent>
              </Card>
            </Box>
          );
        })}

      </Stack>
    </Box>
  );
};

export default Education;