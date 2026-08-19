'use client';
import React from 'react';
import { AppBar, Toolbar, Button, Box, Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const navItems = [
    { label: 'Home', href: '#introduction', icon: <HomeIcon /> },
    { label: 'Skills', href: '#skills', icon: <CodeIcon /> },
    { label: 'Projects', href: '#projects', icon: <WorkIcon /> },
    
    { label: 'Education', href: '#education', icon: <SchoolIcon /> },
    { label: 'Contact', href: '#contact', icon: <EmailIcon /> },
  ];

  return (
    <Box>
      {/* Desktop Top Navbar */}
      <AppBar
        position="fixed"
        sx={{
          display: { xs: 'none', md: 'flex' },
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          borderRadius: '20px',
          width: '85%',
          left: '50%',
          transform: 'translateX(-50%)',
          top: 20,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                sx={{
                  color: 'white',
                  '&:hover': { color: '#3B82F6', backgroundColor: 'transparent' },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Bottom Navigation with Icons */}
      <Paper
        sx={{
          position: 'fixed',
          bottom: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '92%',
          maxWidth: '500px',
          zIndex: 1300,
          display: { xs: 'block', md: 'none' },
          borderRadius: '24px',
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          overflow: 'hidden',
        }}
        elevation={6}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            backgroundColor: 'transparent',
            height: '64px',
            '& .MuiBottomNavigationAction-root': {
              color: 'rgba(255, 255, 255, 0.6)',
              minWidth: 'auto',
              padding: '6px 0',
              '&.Mui-selected': {
                color: '#3B82F6',
              },
              '& .MuiBottomNavigationAction-label': {
                fontSize: '0.7rem',
                '&.Mui-selected': {
                  fontSize: '0.75rem',
                  fontWeight: 600,
                },
              },
            },
          }}
        >
          {navItems.map((item, index) => (
            <BottomNavigationAction
              key={item.label}
              label={item.label}
              icon={item.icon}
              component={Link}
              href={item.href}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Navbar;