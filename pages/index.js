import * as React from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { motion, useScroll, useTransform } from 'framer-motion';
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

function StickyAvatar({ name }) {
  // Foto sticky centralizada verticalmente no desktop, estática no mobile
  return (
    <Box
      sx={{
        position: { xs: 'static', md: 'sticky' },
        top: { md: '50%' },
        transform: { md: 'translateY(-50%)' },
        alignSelf: { xs: 'center', md: 'flex-start' },
        zIndex: 2,
        mb: { xs: 2, md: 0 },
      }}
    >
      <Avatar
        alt={name}
        src="/images/perfil.jpeg"
        sx={{ width: 240, height: 240, border: '4px solid #1976d2' }}
      />
    </Box>
  );
}

export default function Home() {
  const [language, setLanguage] = React.useState(() => {
  if (typeof window !== 'undefined') {
    const cachedLang = window.sessionStorage.getItem('language');
    if (cachedLang && ['pt', 'en'].includes(cachedLang)) {
      return cachedLang;
    }
    const browserLang = navigator.language.slice(0, 2);
    return ['pt', 'en'].includes(browserLang) ? browserLang : 'pt';
  }
  return 'pt';
});

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('language', language);
    }
  }, [language]);
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
       <Box sx={{
         display: 'flex',
         flexDirection: { xs: 'column', md: 'row' },
         alignItems: { xs: 'center', md: 'flex-start' },
         justifyContent: 'center',
         mt: 8,
         gap: 4,
       }}>
         {/* Só renderiza a foto animada uma vez, centralizada no mobile */}
          <StickyAvatar name={t.header.name} />
         <Box sx={{ width: { xs: '100%', md: 'auto' }, textAlign: { xs: 'center', md: 'left' } }}>
           <Typography
  variant="h4"
  gutterBottom
  sx={{
    fontSize: {
      xs: 'clamp(1.5rem, 5vw, 2.5rem)',
      sm: 'clamp(2rem, 4vw, 3rem)',
      md: 'clamp(2.5rem, 3vw, 3.5rem)',
    },
    textAlign: { xs: 'center', md: 'left' },
    fontWeight: 700,
    lineHeight: 1.2,
    mb: 2,
  }}
>
  {t.header.name}
</Typography>
          {/* Renderiza apenas o AboutMe na home */}
          <AboutMe t={t} />
        </Box>
      </Box>
    </Box>
  );
}
