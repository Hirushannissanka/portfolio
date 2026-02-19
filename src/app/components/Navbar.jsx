'use client';
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { ListItemButton } from '@mui/material';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#introduction' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <Box>
      <AppBar position="fixed" sx={{
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        borderRadius: '20px',
        width: { xs: '95%', md: '85%' },
        left: '50%',
        transform: 'translateX(-50%)',
        top: 20,


      }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>



          {/* Desktop Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
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

          {/* Mobile Hamburger */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'flex-start' }}>
            <IconButton
              color="inherit"
              edge="end"
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={open} onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            height: 'auto',
            minHeight: 150,
            maxHeight: '50vh',
          },
        }}>
        <List sx={{ width: 200 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={() => setOpen(false)}
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;