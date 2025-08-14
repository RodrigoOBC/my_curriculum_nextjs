import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EducationCard from '../molecules/EducationCard';

export default function Education({ t, educationList = [] }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%" sx={{ gap: 3, px: 2 }}>
      <Typography variant="h5" sx={{ mt: 2 }}>
        {t.education.title}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, mb: 3 }}>
        {t.education.description}
      </Typography>
     {educationList.length === 0 ? (
         <Typography variant="body2" color="text.secondary">Nenhuma formação encontrada.</Typography>
       ) : (
         <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
           <Grid container spacing={3} maxWidth={900} justifyContent="center">
             {educationList.map((edu, idx) => (
               <Grid item xs={12} md={6} key={idx}>
                 <EducationCard
                   course={edu.course}
                   startYear={edu.startDate}
                   endYear={edu.endDate}
                   degree={edu.type}
                   institution={edu.institution}
                 />
               </Grid>
             ))}
           </Grid>
         </Box>
       )}
    </Box>
  );
}
