import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WorkIcon from '@mui/icons-material/Work';
import Divider from '@mui/material/Divider';

/**
 * Componente para exibir informações de uma experiência profissional.
 * ATENÇÃO: Nunca use dangerouslySetInnerHTML para renderizar dados vindos do banco sem sanitização! Isso pode causar XSS.
 * Props:
 * - cargo: nome do cargo
 * - startYear: ano de início
 * - endYear: ano de término
 * - empresa: nome da empresa
 * - estado: estado da empresa
 * - resumo: breve resumo do cargo
 */
import Grid from '@mui/material/Grid';

const ExperienceCard = ({ cargo, startYear, endYear, empresa, estado, resumo }) => (
  <Card
    sx={{
      width: '100%',
      minWidth: 280,
      maxWidth: '100%',
      borderRadius: 4,
      boxShadow: 6,
      borderLeft: '8px solid',
      borderColor: 'primary.main',
      transition: 'box-shadow 0.3s',
      ':hover': {
        boxShadow: 12,
      },
      backgroundColor: '#fff',
      marginBottom: 3,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {/* Seção 1: Topo - Cargo */}
    <Box sx={{ display: 'flex', alignItems: 'center', p: 2, pb: 1, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>
      <WorkIcon color="primary" sx={{ fontSize: 32, mr: 1 }} />
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {cargo} | {startYear} - {endYear}
      </Typography>
    </Box>
    <Divider />
    {/* Seção 2: Grid principal */}
    <Box sx={{ display: 'flex', flexDirection: 'row', px: 2, py: 2, gap: 2, alignItems: 'center' }}>
      {/* Coluna 1: Empresa, estado, datas */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, justifyContent: 'center', height: '100%' }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
          {empresa}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {estado}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {startYear} - {endYear}
        </Typography>
      </Box>
      {/* Coluna 2: Resumo */}
      <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {Array.isArray(resumo)
          ? resumo.map((item, idx) => (
              <Typography key={idx} variant="body2" color="text.primary" paragraph>
                {item}
              </Typography>
            ))
          : <Typography variant="body2" color="text.primary">{resumo}</Typography>
        }
      </Box>
    </Box>
  </Card>
);


export default ExperienceCard;
