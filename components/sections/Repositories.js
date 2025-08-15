import * as React from 'react';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RepositoryCard from '../molecules/RepositoryCard';

export default function Repositories({ t, repositoriesList = [], aggregator = 'github' }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%" sx={{ gap: 3, px: 2 }}>

      {repositoriesList.length === 0 ? (
        <Typography variant="body2" color="text.secondary">Nenhum repositório encontrado.</Typography>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Grid container spacing={2} maxWidth={1200} sx={{ mx: 'auto' }} columns={12}>
            {repositoriesList.map((repo, idx) => (
              <Grid item xs={12} sm={6} md={4}  key={idx}>
<RepositoryCard
                   name={repo.title}
                   description={repo.description}
                   tags={repo.tags}
                   link={repo.link}
                   aggregator={aggregator}
                 />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
