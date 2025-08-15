import * as React from 'react';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArticleCard from '../molecules/ArticleCard';

export default function Articles({ t, articlesList = [] }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%" sx={{ gap: 3, px: 2 }}>
      {articlesList.length === 0 ? (
        <Typography variant="body2" color="text.secondary">Nenhum artigo encontrado.</Typography>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Grid container spacing={3} maxWidth={900} justifyContent="center">
            {articlesList.map((article, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <ArticleCard
                  title={article.title}
                  content={article.content}
                  link={article.link}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
