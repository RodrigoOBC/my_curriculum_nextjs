import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

/**
 * Componente para exibir informações de um repositório.
 * Props:
 * - name: nome do repositório
 * - description: descrição do repositório
 * - tags: array de tags
 */
import GitHubIcon from '@mui/icons-material/GitHub';

const RepositoryCard = ({ name, description, tags, link, aggregator }) => (
  <Box mb={3}>
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <Card
        sx={{
        width: { xs: '95%', sm: 480 },
        minWidth: 320,
        maxWidth: 480,
        height: 180,
        minHeight: 180,
        maxHeight: 180,
        borderRadius: 4,
        boxShadow: 6,
        borderLeft: '8px solid',
        borderColor: 'primary.main',
        transition: 'box-shadow 0.3s',
        ':hover': {
          boxShadow: 12,
        },
        backgroundColor: '#fff',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Seção superior: nome do repositório */}
       <Box sx={{ display: 'flex', alignItems: 'center', p: 2, pb: 1 }}>
         {aggregator === 'github' && (
           <GitHubIcon sx={{ color: 'primary.main', mr: 1 }} />
         )}
         <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
           {name}
         </Typography>
       </Box>
      <Divider />
      {/* Seção inferior: descrição + tags */}
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', py: 1 }}>
        <Typography variant="body2" color="text.primary" paragraph sx={{ mb: 1, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
          {description}
        </Typography>
         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
           {tags && tags.map((tag, idx) => (
             <Chip key={idx} label={tag} color="primary" variant="outlined" />
           ))}
         </Box>
       </CardContent>
      </Card>
    </a>
  </Box>
);



export default RepositoryCard;
