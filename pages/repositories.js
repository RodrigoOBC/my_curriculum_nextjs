import * as React from 'react';
import { useState, useEffect } from 'react';
import Repositories from '../components/sections/Repositories';
import Header from '../components/layout/Header';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { loadTranslation } from '../lib/getTranslations';

export async function getStaticProps() {
  const { findAll } = await import('../lib/mongodb');
  let repositoriesRaw = [];
  try {
    repositoriesRaw = await findAll('Repositories');
  } catch (err) {
    console.error("Failed to fetch repositories from MongoDB:", err);
    repositoriesRaw = [];
  }
  return {
    props: {
      repositoriesRaw: JSON.parse(JSON.stringify(repositoriesRaw)),
    },
    revalidate: 60,
  };
}



export default function RepositoriesPage({ repositoriesRaw }) {
  const [language, setLanguage] = useState(() => {
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

  const [t, setT] = useState(() => loadTranslation(language));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('language', language);
    }
    setT(loadTranslation(language));
  }, [language]);

  const repositoriesList = Array.isArray(repositoriesRaw) && repositoriesRaw.length > 0 && repositoriesRaw[0]?.[language]?.github
    ? repositoriesRaw[0][language].github
    : [];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header
        t={t}
        language={language}
        setLanguage={setLanguage}
        onNavigate={() => { }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 8, gap: 2 }}>
        <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(90deg, #1976d2 0%, #000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                fontSize: { xs: 32, sm: 48 },
              }}
            >
              {t['pageTitle']['repositories'] || 'Repositórios'}
            </Typography>
          </Box>
          <Divider sx={{ borderColor: 'rgba(128,128,128,0.15)', borderWidth: 1, borderRadius: 2, my: 4 }} />
          <Repositories t={t} repositoriesList={repositoriesList} aggregator="github" />
          <Divider sx={{ borderColor: 'rgba(128,128,128,0.15)', borderWidth: 1, borderRadius: 2, my: 4 }} />
        </Box>
      </Box>
    </Box>
  );
}
