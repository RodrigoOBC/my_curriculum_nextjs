import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

/**
 * Componente para exibir um artigo.
 * Props:
 * - title: título do artigo
 * - content: conteúdo do artigo
 * - link: URL do artigo
 */
const ArticleCard = ({ title, content, link }) => (
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

    <Box sx={{ p: 2, pb: 1, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
        {title}
      </Typography>
    </Box>
    <Divider />

    <CardContent>
      <Typography variant="body2" color="text.primary" paragraph>
        {content}
      </Typography>
    </CardContent>

    <Box sx={{ p: 2, pt: 0, display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        variant="contained"
        color="primary"
        href={link}
        target="_blank"
        sx={{ fontWeight: 600, borderRadius: 2 }}
      >
        Ler artigo
      </Button>
    </Box>
  </Card>
);

export default ArticleCard;
