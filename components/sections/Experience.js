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
           <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 3, maxWidth: 900 }}>
              {experienceList.map((exp) => (
               <Box key={exp.id || exp.company} sx={{ width: '100%' }}>
                 <ExperienceCard
                   cargo={exp.position}
                   startYear={exp.startDate}
                   endYear={exp.endDate}
                   empresa={exp.company}
                   estado={exp.state}
                   resumo={exp.descriptions}
                 />
               </Box>
             ))}
            </Box>
         </Box>
       )}
    </Box>
  );
}
