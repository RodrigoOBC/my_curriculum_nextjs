import * as React from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { motion, useScroll, useTransform } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Header from '../components/layout/Header';

const AboutMe = dynamic(() => import('../components/sections/AboutMe'));



function StickyAvatar({ name }) {
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



import { loadTranslation } from '../lib/getTranslations';

export async function getStaticProps() {
  const { findAll } = await import('../lib/mongodb');
  let aboutMeData = {};
  try {
    const data = await findAll('aboutme');
    if (data.length > 0) {
      aboutMeData = data[0];
      delete aboutMeData._id;
    }
  } catch (error) {
    console.error('Failed to fetch about me data:', error);
  }

  return {
    props: {
      aboutMeData,
    },
    revalidate: 60,
  };
}

export default function Home({ aboutMeData }) {

  const [language, setLanguage] = React.useState('pt');
  const [hydrated, setHydrated] = React.useState(false);
  const [t, setT] = React.useState(() => loadTranslation('pt'));

  React.useEffect(() => {
    setHydrated(true);
    try {
      const cached = window.sessionStorage.getItem('language');
      if (cached && ['pt','en'].includes(cached)) {
        setLanguage(cached);
        return;
      }
      const browserLang = navigator.language.slice(0,2);
      if (['pt','en'].includes(browserLang)) {
        setLanguage(browserLang);
      }
    } catch {}
  }, []);

  React.useEffect(() => {
    setT(loadTranslation(language));
    try { window.sessionStorage.setItem('language', language); } catch {}
  }, [language]);

  const aboutMeContent = aboutMeData?.[language] || t.aboutMe;

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
          <AboutMe aboutMe={aboutMeContent} />
        </Box>
      </Box>
    </Box>
  );
}
