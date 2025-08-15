import * as React from 'react';
import { useState, useEffect } from 'react';
import { MongoOperator } from '../lib/mongodb';
import Articles from '../components/sections/Articles';
import Typography from '@mui/material/Typography';
import Header from '../components/layout/Header';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export async function getStaticProps() {
  const host = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;
  const mongo = new MongoOperator(host, dbName);
  let articlesList = [];
  try {
    articlesList = await mongo.findAll('Articles');
    await mongo.closeConnection();
  } catch (err) {
    console.error("Failed to fetch articles from MongoDB:", err);
    articlesList = [];
  }
  return {
    props: {
      articlesList: JSON.parse(JSON.stringify(articlesList)),
    },
    revalidate: 60,
  };
}

function useTranslations(language) {
  const [t, setT] = useState(null);
  useEffect(() => {
    fetch(`/locales/${language}.json`)
      .then((res) => res.json())
      .then(setT);
  }, [language]);
  return t;
}

export default function ArticlesPage({ articlesList }) {
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

  useEffect(() => {
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
        onNavigate={() => { }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 8, gap: 2 }}>
<Box sx={{ width: '100%', maxWidth: 900, mx: 'auto', mb: 2 }}>
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
                {t['pageTitle']['articles'] || 'Artigos'}
              </Typography>

                <Button
    variant="contained"
    color="primary"
    endIcon={<MenuBookIcon />}
    sx={{ fontWeight: 600, fontSize: 16, px: 3, py: 1, borderRadius: 2, boxShadow: 2 }}
    href={"https://medium.com/@rodrigo.oliveiracabral"
    }
    target="_blank"
  >
      {t.buttons?.readAllArticles || 'Ler todos os artigos'}
  </Button>
            </Box>
            <Box sx={{ width: '100%', maxWidth: 900, my: 2 }}>
          <Divider sx={{ borderColor: 'rgba(128,128,128,0.15)', borderWidth: 1, borderRadius: 2 }} />
        </Box>
           <Articles t={t} articlesList={articlesList} />
           <Divider sx={{ borderColor: 'rgba(128,128,128,0.15)', borderWidth: 1, borderRadius: 2, my: 4 }} />
         </Box>
      </Box>
    </Box>
  );
}
