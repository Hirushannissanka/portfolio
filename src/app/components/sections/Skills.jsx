'use client'
import { Box, Stack, Typography, Grid } from '@mui/material';
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython,FaJava ,FaDocker,FaGithub,FaJenkins,FaAws,FaGitAlt,FaLinux} from 'react-icons/fa';
import BackgroundIcons from '../BackgroundIcons';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 size={40} color="#E44D26" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { name: 'Js', icon: <FaJsSquare size={40} color="#F7DF1E" /> },
  { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" /> },
  { name: 'Python', icon: <FaPython size={40} color="#3776AB" /> },
  { name: 'Java', icon: <FaJava size={40} color="#007396" /> },
  { name: 'Docker', icon: <FaDocker size={40} color="#2496ED" /> },
  { name: 'GitHub', icon: <FaGithub size={40} color="#24292E" /> },
  { name: 'Jenkins', icon: <FaJenkins size={40} color="#D24939" /> },
  { name: 'AWS', icon: <FaAws size={40} color="#FF9900" /> },
  { name: 'Git', icon: <FaGitAlt size={40} color="#F05033" /> },
  { name: 'Linux', icon: <FaLinux size={40} color="#F05033" /> }
  
  
  
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 6, md: 0 },
        zIndex: 1, // ensure content is above floating icons
        /*
         position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1E293B, #0F172A)',
        color: 'white',
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 6, md: 10 },
        overflow: 'hidden',

        */
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        mb={6}
        sx={{
          textAlign: 'center',
          fontSize: { xs: '28px', sm: '34px', md: '48px' },
          color: '#3B82F6', // blue like Introduction highlight
        }}
      >
        My Skills
      </Typography>


      
      {/* Skills Grid */}
     <Grid container spacing={4} justifyContent="center">
  {skills.map((skill) => (
    <Grid
      item
      key={skill.name}
      xs={6} sm={4} md={2} // responsive sizing
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {/* Small Skill Card */}
      <Box
        sx={{
          background: '#1E293B',   // card background
          borderRadius: 3,         // rounded corners
          padding: 3,              // spacing inside card
          minWidth: 100,
          minHeight: 120,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
          },
        }}
      >
        {skill.icon}
        <Typography
          sx={{
            mt: 1,
            fontWeight: 500,
            fontSize: { xs: '14px', sm: '16px', md: '18px' },
            color: '#FFFFFF',
          }}
        >
          {skill.name}
        </Typography>
      </Box>
    </Grid>
  ))}
</Grid>

    </Box>
  );
};

export default Skills;
