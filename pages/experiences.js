import * as React from 'react';
import { z } from 'zod';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/HadSkills';
import Header from '../components/layout/Header';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useState, useEffect } from 'react';



import { loadTranslation } from '../lib/getTranslations';

export async function getStaticProps() {
  const { findAll } = await import('../lib/mongodb');
  let skillsList = [];
  let experiencesList = [];
  try {
    skillsList = await findAll('Skills');
    experiencesList = await findAll('Experiencia');
    const skillSchema = z.array(z.object({ Softskills: z.array(z.string()) }));
    const experienceSchema = z.array(z.object({
      position: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      company: z.string(),
      state: z.string(),
      descriptions: z.union([z.string(), z.array(z.string())]),
      lang: z.string()
    }));
    const skillParse = skillSchema.safeParse(skillsList);
    const experienceParse = experienceSchema.safeParse(experiencesList);
    if (!skillParse.success) {
      console.error('Skill data validation failed:', skillParse.error);
      skillsList = [];
    }
    if (!experienceParse.success) {
      console.error('Experience data validation failed:', experienceParse.error);
      experiencesList = [];
    }
  } catch (err) {
    console.error("Failed to fetch data from MongoDB:", err);
    skillsList = [];
    experiencesList = [];
  }
  return {
    props: {
      skillsList: JSON.parse(JSON.stringify(skillsList)),
      experiencesList: JSON.parse(JSON.stringify(experiencesList)),
    },
    revalidate: 60,
  };
}





export default function ExperiencesPage({ experiencesList, skillsList }) {
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

  const variantMap = { pt: ['pt','pt/Br'], en: ['en','en/Us'] };
  const languageExperiences = variantMap[language];
  const filteredExperiencesList = Array.isArray(experiencesList)
    ? experiencesList.filter(exp => languageExperiences.includes(exp.lang))
    : [];
  const softSkillsList = Array.isArray(skillsList) && skillsList.length > 0 && Array.isArray(skillsList[0]?.Softskills)
    ? skillsList[0].Softskills
    : []

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
              {t['pageTitle']['experience'] || 'Experiências'}
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
        </Box>
        <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto', my: 4, display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
          <Box sx={{ width: '100%', maxWidth: 900, my: 2 }}>
            <Experience t={t} experienceList={filteredExperiencesList} />
            <Divider sx={{ borderColor: 'rgba(128,128,128,0.15)', borderWidth: 1, borderRadius: 2 }} />
          </Box>


        </Box>
        <Skills t={t} skillsList={softSkillsList} />
      </Box>
    </Box>
  );
}
