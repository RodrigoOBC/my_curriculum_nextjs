import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SchoolIcon from '@mui/icons-material/School';
import Divider from '@mui/material/Divider';

/**
 * Componente atômico para exibir informações de uma formação acadêmica.
 * Props:
 * - course: nome do curso
 * - startYear: ano de início
 * - endYear: ano de término
 * - degree: grau
 * - institution: instituição
 */
const EducationCard = ({ course, startYear, endYear, degree, institution }) => (
  <Box display="flex" justifyContent="center" mb={3}>
    <Card
      sx={{
        width: { xs: '90%', sm: 400 },
        minWidth: 280,
        maxWidth: 400,
        height: 180,
        borderRadius: 4,
        boxShadow: 6,
        borderLeft: '8px solid',
        borderColor: 'primary.main',
        transition: 'box-shadow 0.3s',
        ':hover': {
          boxShadow: 12,
        },
        backgroundColor: '#fff',
        marginX: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Seção superior: ícone + instituição */}
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, pb: 1 }}>
        <SchoolIcon color="primary" sx={{ fontSize: 32, mr: 1 }} />
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {institution}
        </Typography>
      </Box>
      <Divider />
      {/* Seção inferior: esquerda (grau/datas) + direita (curso) */}
      <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', px: 2, pt: 1 }}>
        {/* Esquerda */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {startYear} - {endYear}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {degree}
          </Typography>
        </Box>
        {/* Direita */}
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Typography variant="h6" component="div" sx={{ textAlign: 'right', fontWeight: 700 }}>
            {course}
          </Typography>
        </Box>
      </Box>
    </Card>
  </Box>
);

export default EducationCard;
