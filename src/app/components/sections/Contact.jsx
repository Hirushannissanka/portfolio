'use client';

import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert
} from '@mui/material';
import { Send, CheckCircleOutline } from '@mui/icons-material';


const RECIPIENT_EMAIL = 'hirushannissanka22@gmail.com';

const labelSx = {
  color: '#CBD5E1',
  fontSize: '14px',
  fontWeight: 500,
  mb: 1
};

const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#111827',
    borderRadius: 2,

    '& fieldset': {
      borderColor: '#334155'
    },

    '&:hover fieldset': {
      borderColor: '#475569'
    },

    '&.Mui-focused fieldset': {
      borderColor: '#3B82F6',
      borderWidth: '1px'
    }
  },

  '& .MuiInputBase-input': {
    color: '#F8FAFC',
    fontSize: '14px'
  },

  '& .MuiInputBase-input::placeholder': {
    color: '#64748B',
    opacity: 1
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const emailSubject = encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Triggers default mail client (Gmail, Outlook, Apple Mail) to send email
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

    setOpenSnackbar(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Box
      id="contact"
      sx={{
        width: '100%',
        py: {
          xs: 6,
          sm: 8,
          md: 10
        },
        px: {
          xs: 2,
          sm: 3,
          md: 4
        }
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '700px',
          mx: 'auto'
        }}
      >
        {/* Section Heading */}
        <Box
          sx={{
            textAlign: 'center',
            mb: {
              xs: 4,
              sm: 5,
              md: 6
            }
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '28px',
                sm: '34px',
                md: '40px'
              },
              fontWeight: 700,
              color: '#F8FAFC',
              mb: 1
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            sx={{
              color: '#94A3B8',
              fontSize: {
                xs: '14px',
                sm: '15px'
              },
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.7
            }}
          >
            Have a project in mind or want to work together?
            Feel free to send me a message.
          </Typography>
        </Box>

        {/* Contact Form Card */}
        <Card
          sx={{
            width: '100%',
            borderRadius: {
              xs: 3,
              sm: 4
            },
            background: 'linear-gradient(145deg, #1A1F2E, #151A27)',
            border: '1px solid #23283A',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #3B82F6, #06B6D4, transparent)'
            }
          }}
        >
          <CardContent
            sx={{
              p: {
                xs: 2.5,
                sm: 4,
                md: 4.5
              }
            }}
          >
            {/* Form Heading */}
            <Typography
              sx={{
                fontSize: {
                  xs: '19px',
                  sm: '22px'
                },
                fontWeight: 600,
                mb: 0.5,
                color: '#F8FAFC'
              }}
            >
              Send Me a Message
            </Typography>

            <Typography
              sx={{
                color: '#94A3B8',
                fontSize: {
                  xs: '13px',
                  sm: '14px'
                },
                mb: {
                  xs: 3,
                  sm: 4
                },
                lineHeight: 1.6
              }}
            >
              Fill out the form below and I'll get back to you as soon as possible.
            </Typography>

            {/* FORM */}
            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
              <Grid container direction="column" spacing={{ xs: 2, sm: 2.5 }}>
                {/* NAME */}
                <Grid item xs={12}>
                  <Typography sx={labelSx}>Your Name</Typography>
                  
                  <TextField
                    suppressHydrationWarning
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    variant="outlined"
                    
                    sx={textFieldSx}
                  />
                </Grid>

                {/* EMAIL */}
                <Grid item xs={12}>
                  <Typography sx={labelSx}>Your Email</Typography>
                  <TextField
                    fullWidth
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    variant="outlined"
                    suppressHydrationWarning
                    sx={textFieldSx}
                  />
                </Grid>

                {/* MESSAGE */}
                <Grid item xs={12}>
                  <Typography sx={labelSx}>Message</Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    variant="outlined"
                    suppressHydrationWarning
                    sx={textFieldSx}
                  />
                </Grid>

                {/* BUTTON */}
                <Grid item xs={12} sx={{ mt: 1 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<Send />}
                    fullWidth={false}
                    suppressHydrationWarning
                    sx={{
                      width: {
                        xs: '100%',
                        sm: 'auto'
                      },
                      minWidth: {
                        sm: '170px'
                      },
                      backgroundColor: '#3B82F6',
                      color: 'white',
                      py: 1.5,
                      px: 4,
                      borderRadius: 2.5,
                      textTransform: 'none',
                      fontSize: '15px',
                      fontWeight: 600,
                      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#2563EB',
                        boxShadow: '0 6px 25px rgba(59, 130, 246, 0.6)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Success Notification Toast */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          icon={<CheckCircleOutline fontSize="inherit" />}
          sx={{
            backgroundColor: '#161B2A',
            color: '#F8FAFC',
            border: '1px solid #3B82F6',
            borderRadius: 3,
            '& .MuiAlert-icon': { color: '#3B82F6' }
          }}
        >
          Opening your email client to send message...
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;