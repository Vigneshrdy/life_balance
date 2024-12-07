"use client";

import React, { useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/system';

const HomePage = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    const scrollFeatures = () => {
      if (featuresRef.current) {
        const scrollWidth = featuresRef.current.scrollWidth;
        const containerWidth = featuresRef.current.clientWidth;

        let scrollAmount = 0;
        const scrollStep = 1; // Adjust this value for speed
        const scrollInterval = setInterval(() => {
          if (scrollAmount < scrollWidth - containerWidth) {
            featuresRef.current.scrollLeft += scrollStep;
            scrollAmount += scrollStep;
          } else {
            // Reset scroll position
            featuresRef.current.scrollLeft = 0;
            scrollAmount = 0;
          }
        }, 20); // Adjust this value for smoothness

        return () => clearInterval(scrollInterval);
      }
    };

    scrollFeatures();
  }, []);

  const features = [
    { 
      title: 'Secure Storage', 
      description: 'Your medical reports are encrypted and stored safely.',
      image: 'https://via.placeholder.com/200x200/ff9800/fff?text=Secure+Storage'
    },
    { 
      title: 'Anywhere Access', 
      description: 'Access your records anytime on any device.',
      image: 'https://via.placeholder.com/200x200/ff9800/fff?text=Anywhere+Access'
    },
    { 
      title: 'Share with Ease', 
      description: 'Instantly share your reports with doctors or family.',
      image: 'https://via.placeholder.com/200x200/ff9800/fff?text=Share+with+Ease'
    },
    { 
      title: 'Organization Made Simple', 
      description: 'Tag and categorize your reports for quick retrieval.',
      image: 'https://via.placeholder.com/200x200/ff9800/fff?text=Organize+Easily'
    },
    { 
      title: 'HIPAA Compliance', 
      description: 'Built with your privacy in mind.',
      image: 'https://via.placeholder.com/200x200/ff9800/fff?text=HIPAA+Compliant'
    },
  ];

  const GradientBox = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #ffb74d, #ff9800)',
    padding: theme.spacing(6),
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
    boxShadow: theme.shadows[6],
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 700,
    color: '#fff',
    marginBottom: theme.spacing(3),
  }));

  const FeaturePaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: '#fff',
    borderRadius: 10,
    boxShadow: theme.shadows[3],
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: theme.shadows[6],
    },
  }));

  return (
    <Box sx={{ backgroundColor: '#fafafa', paddingBottom: 6, display: 'flex' }}>
      {/* Sidebar (Fixed) */}
      

      {/* {/* Main Content Area */}
      <Box sx={{ marginLeft: '270px', padding: '20px', flexGrow: 1 }}>
        {/* Hero Section */}
        <GradientBox>
          <StyledTypography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Your Health, Your Records, Anytime, Anywhere.
          </StyledTypography>
          <Typography variant="h5" sx={{ color: '#fff', marginBottom: 4, fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
            Securely upload, manage, and access your medical reports with ease.
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: '#fff', color: '#ff9800', fontWeight: 'bold' }}>
            Get Started
          </Button>
        </GradientBox>

        {/* Features Section */}
        <Typography variant="h4" sx={{ textAlign: 'center', color: '#ff9800', marginY: 5, fontWeight: 600, fontFamily: '"Poppins", sans-serif' }}>
          Why Choose Us?
        </Typography>
        <Box ref={featuresRef} sx={{ display: 'flex', overflow: 'hidden', paddingX: 2, height: '200px' }} className="section">
          {features.map((feature, index) => (
            <Box key={index} sx={{ flex: '0 0 auto', marginRight: 3 }}>
              <FeaturePaper>
                <Avatar src={feature.image} sx={{ width: 80, height: 80, marginBottom: 2, marginX: 'auto' }} />
                <Typography variant="h6" sx={{ color: '#ff9800', fontWeight: 500, marginBottom: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2">
                  {feature.description}
                </Typography>
              </FeaturePaper>
            </Box>
          ))}
        </Box>

        {/* Additional Content Below Scrolling Section */}
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Securely upload, manage, and access your medical reports with ease.
          </Typography>
          
        </Box>

        {/* Footer Section */}
        <Box sx={{ backgroundColor: '#333', color: '#fff', padding: 4, marginTop: 6 }}>
          <Container maxWidth="lg">
            <Typography variant="body2" align="center" sx={{ marginBottom: 2 }}>
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </Typography>
            <Typography variant="body2" align="center">
              Privacy Policy | Terms of Service
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;