'use client';

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  Grid
} from '@mui/material';
import Image from 'next/image';

import Mlpic from './asserts/ML-project.png';
import Shecare from './asserts/shecare-pic.jpg';
import PortfolioPic from './asserts/portfolio-pic.png';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Shecare",
      description:
        "A comprehensive healthcare management system built with balerina.",
      image: Shecare,
      tech: ["Balerina", "Next.js"]
    },
    {
      id: 2,
      title: "Agriguard",
      description:
        "Plant disease detection system using CNN.",
      image: Mlpic,
      tech: ["Python", "Scikit-learn", "Pandas", "React", "Spring Boot"]
    },
    {
        id: 3,
        title: "Persanal Portfolio",
        description: "A personal portfolio website built with Next.js and Material UI.",
        image: PortfolioPic,
        tech: ["Next.js", "Material UI", "JavaScript"]
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: { xs: 3, md: 8 },
        py: 12,
        color: 'white'
      }}
    >
      {/* Section Title */}
      <Typography
        sx={{
          fontSize: { xs: 28, md: 42 },
          fontWeight: 700,
          textAlign: 'center',
          mb: 10
        }}
      >
       Featured Projects
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>

            <Card
              sx={{
                width: '100%'  ,
                maxWidth: 400,
                height: 460,
                alignItems: 'center',
                backgroundColor: '#161B2A',
                border: '1px solid #23283A',
                borderRadius: 3,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
                }
              }}
            >

              {/* Project Image */}
              <Box sx={{
                position: 'relative', 
                height: 220,
                width: '100%',
                overflow: 'hidden',
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3
              }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>

              {/* Project Content */}
              <CardContent sx={{ p: 4, flexGrow: 1 }}>

                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    color: '#94A3B8',
                    mb: 3
                  }}
                >
                  {project.description}
                </Typography>

                {/* Tech Stack */}
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  mb={3}
                >
                  {project.tech.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      sx={{
                        backgroundColor: '#1E2435',
                        color: '#3B82F6',
                        fontSize: 12
                      }}
                    />
                  ))}
                </Stack>

                {/* Buttons */}
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#3B82F6',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#2563EB'
                      }
                    }}
                  >
                    Live Demo
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: '#3B82F6',
                      color: '#3B82F6',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#2563EB',
                        color: '#2563EB'
                      }
                    }}
                  >
                    GitHub
                  </Button>
                </Stack>

              </CardContent>

            </Card>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;