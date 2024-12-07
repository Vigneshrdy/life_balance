import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#FFF6E5', // A light beige matching the main page
  padding: theme.spacing(4),
  textAlign: 'center',
  color: '#3E2723', // Dark brown for better readability
  height: '100%',
  borderRadius: '12px', // Rounded corners for a modern look
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', // Subtle shadow
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 12px 25px rgba(0, 0, 0, 0.2)', // Enhanced shadow on hover
    backgroundColor: '#D9A892', // Matches the main page background on hover
    color: 'white', // White text on hover for contrast
  },
}));

export default function FeaturesSection() {
  const features = [
    {
      title: 'Interactive Learning',
      description: 'Your Intelligent Study Companion Providing Crystal-Clear Explanations, Comprehensive Step-by-Step Solutions, and Tailored Personalized Learning Tips',
      circleColor: '#FFAB91', // Soft orange
    },
    {
      title: 'AI-Driven Learning',
      description: 'A Collaborative, Inclusive Space Where Students Connect, Share Knowledge, Exchange Insights, and Find Inspiring Encouragement Throughout Their Educational Journey',
      circleColor: '#80CBC4', // Muted teal
    },
    {
      title: 'Supportive Community',
      description: 'Dynamically Generate Personalized Assessments That Precisely Target Specific Learning Topics, Meticulously Track Individual Progress, and Systematically Enhance Subject Understanding',
      circleColor: '#A1887F', // Soft brown
    },
    {
      title: 'Custom Quizzes',
      description: 'Empowers Educators to Efficiently Post Grades, Share Real-Time Announcements, and Maintain Transparent Communication, Keeping Students Consistently Informed and Organized',
      circleColor: '#FFCC80', // Light amber
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: '32px 0' }} style={{ backgroundColor: "#FBEFE1"}}>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', color: '#3E2723', marginBottom: '30px',marginTop:'40px' }}>
            Features
          </h2>
        </Grid>

        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Item>
              {/* Decorative Circle */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  width: '1rem',
                  height: '1rem',
                  borderRadius: '50%',
                  backgroundColor: feature.circleColor,
                  zIndex: 1,
                }}
              />

              {/* Content */}
              <div style={{ zIndex: 2 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
