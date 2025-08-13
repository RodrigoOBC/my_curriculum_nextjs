import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Repositories({ t }) {
  return (
    <>
      <Typography variant="h5" sx={{ mt: 2 }}>
        {t.repositories.title}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {t.repositories.description}
      </Typography>
    </>
  );
}
