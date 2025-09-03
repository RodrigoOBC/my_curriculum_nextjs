import * as React from 'react';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

export default function AboutMe({ t }) {
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
        {t.aboutMe.title}
      </Typography>
      {Array.isArray(t.aboutMe.description)
        ? t.aboutMe.description.map((paragraph, idx) => (
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
              {t.aboutMe.description}
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

        {Array.isArray(t.aboutMe.firstSkills)
        ? t.aboutMe.firstSkills.map((skills) => (
           
              <Chip label={skills} color="primary" variant="outlined" sx={{ fontSize: 16, px: 2, height: 40 }} />

          )): null
}


      </Box>
    </Box>
  );
}
