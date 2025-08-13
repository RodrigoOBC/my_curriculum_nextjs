import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Education({ t }) {
  return (
    <>
      <Typography variant="h5" sx={{ mt: 2 }}>
        {t.education.title}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {t.education.description}
      </Typography>
    </>
  );
}
