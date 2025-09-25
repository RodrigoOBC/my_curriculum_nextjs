import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import BuildIcon from '@mui/icons-material/Build';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

export default function Skills({ t, skillsList = [], name = '' }) {
  return (
    <Box width="100%" sx={{ mt: 6, px: 2, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: '100%', maxWidth: 900, borderRadius: 4, boxShadow: 6, backgroundColor: '#fff', mx: 'auto' }}>
        <CardContent sx={{ px: { xs: 2, sm: 4 }, py: { xs: 2, sm: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <BuildIcon color="primary" sx={{ fontSize: 36, mr: 2 }} />
    <Typography
      variant="h5"
      sx={{
        fontWeight: 700,
        background: 'linear-gradient(90deg, #1976d2 0%, #000 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        fontSize: { xs: 28, sm: 36 },
      }}
    >
      {name}
    </Typography>
  </Box>
</Box>
          {skillsList.length === 0 ? (
            <Typography variant="body2" color="text.secondary">Nenhuma skill encontrada.</Typography>
          ) : (
            <Grid container spacing={3} justifyContent="center" columns={12}>
              {skillsList.map((skill) => (
                <Grid key={skill.id || skill.skill} sx={{ display: 'flex', justifyContent: 'center', gridColumn: { xs: 'span 12', sm: 'span 4', md: 'span 4' } }}>
                  <Chip key={skill.id || skill.skill} label={skill.skill}  color="primary" variant="outlined" sx={{ width: '100%', fontSize: 18, px: 2, py: 2, height: 48, transition: 'all 0.2s', cursor: 'pointer', '&:hover': { boxShadow: 4, transform: 'scale(1.08)', background: 'linear-gradient(90deg, #1976d2 0%, #000 100%)', color: '#fff', border: 'none' } }} />
                </Grid>
              ))}
            </Grid>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
