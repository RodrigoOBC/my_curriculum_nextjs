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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%', maxWidth: 900 }}>
            {articlesList.map((article) => (
              <Box key={article.id || article.link || article.title} sx={{ width: '100%' }}>
                <ArticleCard
                  title={article.title}
                  content={article.content}
                  link={article.link}
                />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
