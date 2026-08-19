'use client';

import React, { useEffect } from 'react';
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
import AOS from 'aos';
import 'aos/dist/aos.css';

import Mlpic from './asserts/ML-project.png';
import Shecare from './asserts/shecare-pic.jpg';
import PortfolioPic from './asserts/portfolio-pic.png';
import UPMSpic from './asserts/UPMS-pic.png'

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });

    // Refresh AOS after the component is rendered
    AOS.refresh();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Shecare',
      description:
        'A comprehensive healthcare management system built with Ballerina.',
      image: Shecare,
      tech: ['Ballerina', 'Next.js'],
    },
    {
      id: 2,
      title: 'Agriguard',
      description:
        'Plant disease detection system using CNN.',
      image: Mlpic,
      tech: ['Python', 'Scikit-learn', 'Pandas', 'React', 'Spring Boot'],
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description:
        'A personal portfolio website built with Next.js and Material UI.',
      image: PortfolioPic,
      tech: ['Next.js', 'Material UI', 'JavaScript'],
    },
    {
      id: 4,
      title: 'UPMS',
      description:
        'Procument Management System for university of Sri Jayawardanapura',
      image: UPMSpic,
      tech: ['React JS', 'Spring Boot', 'Prosgrce SQL'],
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        minHeight: '100vh',
        px: { xs: 3, md: 8 },
        py: 12,
        color: 'white',
      }}
    >
      {/* Section Title */}
      <Typography
        data-aos="fade-up"
        sx={{
          fontSize: { xs: 28, md: 42 },
          fontWeight: 700,
          textAlign: 'center',
          mb: 10,
        }}
      >
        Featured Projects
      </Typography>

      {/* Projects */}
      <Grid container spacing={6} justifyContent="center">
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            md={6}
            key={project.id}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            data-aos-delay={index * 150}
          >
            <Card
              sx={{
                width: '100%',
                maxWidth: 400,
                height: 460,
                margin: '0 auto',
                backgroundColor: '#161B2A',
                border: '1px solid #23283A',
                borderRadius: 3,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',

                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
                },
              }}
            >
              {/* Project Image */}
              <Box
                sx={{
                  position: 'relative',
                  height: 220,
                  width: '100%',
                  overflow: 'hidden',
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* Project Content */}
              <CardContent
                sx={{
                  p: 4,
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Project Title */}
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 600,
                    mb: 2,
                    color: 'white',
                  }}
                >
                  {project.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: 14,
                    color: '#94A3B8',
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </Typography>

                {/* Tech Stack */}
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
                  mb={3}
                >
                  {project.tech.map((tech, index) => (
                    <Chip
                      key={`${project.id}-${index}`}
                      label={tech}
                      sx={{
                        backgroundColor: '#1E2435',
                        color: '#3B82F6',
                        fontSize: 12,
                        borderRadius: 1.5,

                        '&:hover': {
                          backgroundColor: '#252D42',
                        },
                      }}
                    />
                  ))}
                </Stack>

                {/* Buttons */}
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    mt: 'auto',
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: '#3B82F6',
                      color: '#3B82F6',
                      textTransform: 'none',
                      borderRadius: 2,
                      px: 3,

                      '&:hover': {
                        borderColor: '#2563EB',
                        color: '#2563EB',
                        backgroundColor: 'rgba(59, 130, 246, 0.08)',
                      },
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