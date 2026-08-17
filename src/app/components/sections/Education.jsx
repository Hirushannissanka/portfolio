'use client';

import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  Chip
} from '@mui/material';

import {
  School,
  EmojiEvents,
  WorkspacePremium,
  MenuBook,
  CheckCircle
} from '@mui/icons-material';

import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "G.C.E Ordinary Level",
      institute: "Wadduwa Central College",
      period: "2019",
      description: "Successfully completed G.C.E Ordinary Level examination.",
      achievement: "6A's, 2B's and 1C",
      tags: ["O/L", "School Education"],
      icon: <School />,
      status: "Completed"
    },
    {
      id: 2,
      title: "G.C.E Advanced Level",
      institute: "Taxila Central College",
      period: "2022",
      description:
        "Completed Advanced Level in the Technology Stream with outstanding academic performance.",
      achievement: "District Rank 1 • Island Rank 9",
      tags: ["A/L", "Technology Stream"],
      icon: <School/>,
      status: "Completed"
    },
    {
      id: 3,
      title: "ICM",
      institute: "Institute of Computer Engineering Technology",
      period: "2023",
      description:
        "Completed the Institute of Computer Engineering Technology course with distinction.",
      achievement: "Completed with Distinction",
      tags: ["Computing", "Technology"],
      icon: <School />,
      status: "Completed"
    },
    {
      id: 4,
      title: "Bachelor of Information Communication Technology",
      institute: "University of Sri Jayewardenepura",
      period: "2024 - Present",
      description:
        "Undergraduate student specializing in Information Communication Technology, with a focus on software development, data science, and emerging technologies.",
      achievement: "Currently pursuing degree",
      tags: [
        "Software Development",
        "Data Science",
        "Emerging Technologies"
      ],
      icon: <School />,
      status: "Currently Studying"
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
      <Stack
        spacing={8}
        sx={{
          width: '100%',
          maxWidth: '1000px'
        }}
      >

        {/* ================= TITLE ================= */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              fontSize: {
                xs: '30px',
                sm: '36px',
                md: '48px'
              },
              fontWeight: 700,
              mb: 1
            }}
          >
            Education
          </Typography>

          <Typography
            sx={{
              color: '#94A3B8',
              fontSize: { xs: '14px', sm: '16px' },
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            My academic journey, achievements and continuous learning
            throughout my education.
          </Typography>
        </Box>

        {/* ================= TIMELINE ================= */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            py: 2,

            /* Vertical timeline */
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '2px',
              background:
                'linear-gradient(to bottom, transparent, #3B82F6, #23283A, #3B82F6, transparent)',
              transform: 'translateX(-50%)',

              '@media (max-width: 899px)': {
                left: '14px',
                transform: 'none'
              }
            }
          }}
        >
          <Stack spacing={9}>

            {educationData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <Box
                  key={item.id}
                  sx={{
                    position: 'relative',
                    display: 'flex',

                    justifyContent: {
                      xs: 'flex-start',
                      md: isLeft ? 'flex-start' : 'flex-end'
                    },

                    pl: {
                      xs: 5,
                      md: 0
                    }
                  }}
                >

                  {/* ================= TIMELINE DOT ================= */}
                  <Box
                    sx={{
                      position: 'absolute',

                      left: {
                        xs: '14px',
                        md: '50%'
                      },

                      top: '45px',

                      width: '14px',
                      height: '14px',

                      borderRadius: '50%',

                      backgroundColor: '#3B82F6',

                      border: '3px solid #0F1420',

                      boxSizing: 'content-box',

                      transform: 'translateX(-50%)',

                      zIndex: 3,

                      boxShadow:
                        '0 0 0 4px rgba(59,130,246,0.12), 0 0 20px rgba(59,130,246,0.6)'
                    }}
                  />

                  {/* ================= CONNECTING LINE ================= */}
                  <Box
                    sx={{
                      display: {
                        xs: 'none',
                        md: 'block'
                      },

                      position: 'absolute',

                      top: '52px',

                      width: '40px',

                      height: '2px',

                      backgroundColor: '#23283A',

                      left: isLeft
                        ? 'calc(50% - 40px)'
                        : '50%'
                    }}
                  />

                  {/* ================= CARD ================= */}
                  <Card
                    sx={{
                      position: 'relative',

                      width: {
                        xs: '100%',
                        md: 450
                      },

                      minHeight: 320,

                      borderRadius: 4,

                      background:
                        'linear-gradient(145deg, #1A1F2E, #151A27)',

                      border: '1px solid #23283A',

                      overflow: 'hidden',

                      transition:
                        'all 0.35s ease',

                      '&::before': {
                        content: '""',

                        position: 'absolute',

                        top: 0,
                        left: 0,

                        width: '100%',
                        height: '3px',

                        background:
                          'linear-gradient(90deg, transparent, #3B82F6, transparent)',

                        opacity: 0.6
                      },

                      '&:hover': {
                        transform: 'translateY(-8px)',

                        borderColor: '#3B82F6',

                        boxShadow:
                          '0 25px 60px rgba(0,0,0,0.55), 0 0 30px rgba(59,130,246,0.08)'
                      }
                    }}
                  >

                    <CardContent
                      sx={{
                        p: { xs: 2.5, sm: 3.5 }
                      }}
                    >

                      {/* ================= TOP ROW ================= */}
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          mb: 2
                        }}
                      >

                        {/* Icon */}
                        <Box
                          sx={{
                            width: 48,
                            height: 48,

                            borderRadius: 3,

                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',

                            color: '#3B82F6',

                            backgroundColor:
                              'rgba(59,130,246,0.1)',

                            border:
                              '1px solid rgba(59,130,246,0.2)'
                          }}
                        >
                          {item.icon}
                        </Box>

                        {/* Year */}
                        <Typography
                          sx={{
                            color: '#3B82F6',

                            fontSize: '13px',

                            fontWeight: 600,

                            px: 1.5,
                            py: 0.7,

                            borderRadius: 2,

                            backgroundColor:
                              'rgba(59,130,246,0.08)',

                            border:
                              '1px solid rgba(59,130,246,0.15)'
                          }}
                        >
                          {item.period}
                        </Typography>

                      </Box>

                      {/* ================= TITLE ================= */}
                      <Typography
                        sx={{
                          fontSize: {
                            xs: '19px',
                            sm: '21px'
                          },

                          fontWeight: 600,

                          color: '#F8FAFC',

                          lineHeight: 1.35,

                          mb: 0.7
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* ================= INSTITUTE ================= */}
                      <Typography
                        sx={{
                          color: '#94A3B8',

                          fontSize: '14px',

                          mb: 2
                        }}
                      >
                        {item.institute}
                      </Typography>

                      {/* ================= DESCRIPTION ================= */}
                      <Typography
                        sx={{
                          color: '#CBD5E1',

                          fontSize: '14px',

                          lineHeight: 1.7,

                          mb: 2.5
                        }}
                      >
                        {item.description}
                      </Typography>

                      {/* ================= ACHIEVEMENT ================= */}
                      <Box
                        sx={{
                          display: 'flex',

                          alignItems: 'center',

                          gap: 1,

                          mb: 2
                        }}
                      >
                        <EmojiEvents
                          sx={{
                            fontSize: 18,
                            color: '#3B82F6'
                          }}
                        />

                        <Typography
                          sx={{
                            color: '#E2E8F0',

                            fontSize: '13px',

                            fontWeight: 500
                          }}
                        >
                          {item.achievement}
                        </Typography>
                      </Box>

                      {/* ================= TAGS ================= */}
                      <Box
                        sx={{
                          display: 'flex',

                          flexWrap: 'wrap',

                          gap: 1,

                          mb: 2.5
                        }}
                      >
                        {item.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              color: '#94A3B8',

                              backgroundColor:
                                '#111827',

                              border:
                                '1px solid #23283A',

                              fontSize: '11px',

                              '& .MuiChip-label': {
                                px: 1.2
                              }
                            }}
                          />
                        ))}
                      </Box>

                      {/* ================= STATUS ================= */}
                      <Box
                        sx={{
                          display: 'flex',

                          alignItems: 'center',

                          gap: 1,

                          pt: 2,

                          borderTop:
                            '1px solid #23283A'
                        }}
                      >
                        <CheckCircle
                          sx={{
                            fontSize: 17,

                            color:
                              item.status ===
                                'Currently Studying'
                                ? '#3B82F6'
                                : '#64748B'
                          }}
                        />

                        <Typography
                          sx={{
                            fontSize: '12px',

                            color:
                              item.status ===
                                'Currently Studying'
                                ? '#3B82F6'
                                : '#64748B',

                            fontWeight: 500
                          }}
                        >
                          {item.status}
                        </Typography>
                      </Box>

                    </CardContent>
                  </Card>

                </Box>
              );
            })}

          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Education;