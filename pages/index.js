import * as React from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Header from '../components/layout/Header';

const AboutMe = dynamic(() => import('../components/sections/AboutMe'));

function useTranslations(language) {
  const [t, setT] = React.useState(null);

  React.useEffect(() => {
    fetch(`/locales/${language}.json`)
      .then((res) => res.json())
      .then(setT);
  }, [language]);

  return t;
}

export default function Home() {
  const [language, setLanguage] = React.useState('pt');
  const t = useTranslations(language);

  if (!t) return <div>Carregando...</div>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header
        t={t}
        language={language}
        setLanguage={setLanguage}
        onNavigate={() => {}}
      />
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', mt: 8, gap: 4 }}>
        <Avatar
          alt={t.header.name}
          src="/profile.jpg"
          sx={{ width: 180, height: 180, border: '4px solid #1976d2' }}
        />
        <Box>
          <Typography variant="h4" gutterBottom>
            {t.header.name}
          </Typography>
          {/* Renderiza apenas o AboutMe na home */}
          <AboutMe t={t} />
        </Box>
      </Box>
    </Box>
  );
}
