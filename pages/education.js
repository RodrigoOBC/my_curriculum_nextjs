import * as React from 'react';
import { z } from 'zod';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import Education from '../components/sections/Education';
import Skills from '../components/sections/Skills';
import Header from '../components/layout/Header';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useState, useEffect } from 'react';

import { loadTranslation } from '../lib/getTranslations';

export async function getStaticProps() {
  const { findAll } = await import('../lib/mongodb');
  let educationList = [];
  let skillsList = [];
  try {
    educationList = await findAll('Education');
    skillsList = await findAll('Skills');
    const educationSchema = z.array(z.object({
      lang: z.string(),
      institution: z.string().optional(),
      degree: z.string().optional(),
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      descriptions: z.union([z.string(), z.array(z.string())]).optional()
    }));
    const educationParse = educationSchema.safeParse(educationList);
    if (!educationParse.success) {
      console.error('Education data validation failed:', educationParse.error);
      educationList = [];
    }
  } catch (err) {
    console.error("Failed to fetch data from MongoDB:", err);
    educationList = [];
    skillsList = [];
  }
   return {
     props: {
       educationList: JSON.parse(JSON.stringify(educationList)),
       skillsList: JSON.parse(JSON.stringify(skillsList)),
     },
     revalidate: 60,
   };
 }



export default function EducationPage({ educationList, skillsList }) {
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

  if (!t.pageTitle || !t.pageTitle.education) {
    console.warn('Tradução de education não encontrada, usando fallback.');
  }

  const filteredEducationList = Array.isArray(educationList) ? educationList.filter(edu => edu.lang === language) : [];

  const hadSkillsList = Array.isArray(skillsList) && skillsList.length > 0 && Array.isArray(skillsList[0]?.HadSkills)
    ? skillsList[0].HadSkills
    : [];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header
        t={t}
        language={language}
        setLanguage={setLanguage}
        onNavigate={() => {}}
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
    {t['pageTitle']['education'] || 'Formação Acadêmica'}
  </Typography>
  <Button
    variant="contained"
    color="primary"
    endIcon={<DownloadIcon />}
    sx={{ fontWeight: 600, fontSize: 16, px: 3, py: 1, borderRadius: 2, boxShadow: 2 }}
    href={
      language === 'pt'
        ? "https://drive.google.com/file/d/1W3T35gdR0fGq8hHb2xgqB7sbXOA8nTFX/view"
        : "https://drive.google.com/file/d/1d3gFlEXhrFObIvd_BOgk9JSa0pHpO3wT/view"
    }
    target="_blank"
  >
    Download CV
  </Button>
</Box>
        <Box sx={{ width: '100%', maxWidth: 900, my: 2 }}>
          <Divider sx={{ borderColor: 'rgba(128,128,128,0.15)', borderWidth: 1, borderRadius: 2 }} />
        </Box>
  <Education t={t} educationList={filteredEducationList} />
</Box>
        <Box sx={{ width: '100%', maxWidth: 900, my: 2 }}>
          <Divider sx={{ borderColor: 'rgba(128,128,128,0.15)', borderWidth: 1, borderRadius: 2 }} />
        </Box>
         <Skills t={t} skillsList={hadSkillsList || []} name={'Hard Skills'} />
      </Box>
    </Box>
  );
}
