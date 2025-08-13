import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Experience({ t }) {
  return (
    <>
      <Typography variant="h5" sx={{ mt: 2 }}>
        {t.experience.title}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {t.experience.description}
      </Typography>
    </>
  );
}
