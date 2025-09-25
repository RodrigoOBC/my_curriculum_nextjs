import * as React from 'react';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

export default function AboutMe({ aboutMe }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        mt: 4,
      }}
    >
      
      <Typography variant="h5" sx={{ mb: 2 }}>
        {aboutMe.title}
      </Typography>
      {Array.isArray(aboutMe.description)
        ? aboutMe.description.map((paragraph, idx) => (
            <Typography
              key={idx}
              variant="body1"
              sx={{
                color: '#6c757d',
                textAlign: 'justify',
                opacity: 1,
                mb: 2,
                maxWidth: 600,
              }}
            >
              {paragraph}
            </Typography>
          ))
        : (
            <Typography
              variant="body1"
              sx={{
                color: '#6c757d',
                textAlign: 'justify',
                opacity: 1,
                mb: 2,
                maxWidth: 600,
              }}
            >
              {aboutMe.description}
            </Typography>
          )}
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          maxWidth: 600,
          mt: 1,
          ml: 'auto',
          mr: 'auto',
        }}
      >

        {Array.isArray(aboutMe.firstSkills)
        ? aboutMe.firstSkills.map((skill) => (
            
              <Chip key={skill} label={skill} color="primary" variant="outlined" sx={{ fontSize: 16, px: 2, height: 40 }} />

          )): null
}


      </Box>
    </Box>
  );
}
