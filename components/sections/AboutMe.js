import * as React from 'react';
import Typography from '@mui/material/Typography';

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
    </Box>
  );
}
