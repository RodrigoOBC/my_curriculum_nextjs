import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Articles({ t }) {
  return (
    <>
      <Typography variant="h5" sx={{ mt: 2 }}>
        {t.articles.title}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {t.articles.description}
      </Typography>
    </>
  );
}
