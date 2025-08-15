import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ExperienceCard from '../molecules/ExperienceCard';

export default function Experience({ t, experienceList = [] }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%" sx={{ gap: 3, px: 2 }}>


     {experienceList.length === 0 ? (
         <Typography variant="body2" color="text.secondary">Nenhuma formação encontrada.</Typography>
       ) : (
         <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
           <Grid container spacing={3} maxWidth={900} justifyContent="center">
             {experienceList.map((edu, idx) => (
               <Grid item xs={12} md={6} key={idx}>
                 <ExperienceCard
                   cargo={edu.position}
                   startYear={edu.startDate}
                   endYear={edu.endDate}
                   empresa={edu.company}
                   estado={edu.state}
                   resumo={edu.descriptions}
                 />
               </Grid>
             ))}
           </Grid>
         </Box>
       )}
    </Box>
  );
}
