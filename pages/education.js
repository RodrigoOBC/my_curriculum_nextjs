import * as React from 'react';
import { MongoOperator } from '../lib/mongodb';
import Education from '../components/sections/Education';
import Skills from '../components/sections/Skills';
import Header from '../components/layout/Header';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useState, useEffect } from 'react';

export async function getStaticProps() {
  const host = process.env.MONGODB_URI ;
  const dbName = process.env.MONGODB_DB ;
  const mongo = new MongoOperator(host, dbName);
   let educationList = [];
   let skillsList = [];
   try {
     educationList = await mongo.findAll('Education');
     skillsList = await mongo.findAll('Skills');
     await mongo.closeConnection();
   } catch (err) {
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

function useTranslations(language) {
  const [t, setT] = useState(null);
  useEffect(() => {
    fetch(`/locales/${language}.json`)
      .then((res) => res.json())
      .then(setT);
  }, [language]);
  return t;
}

export default function EducationPage({ educationList, skillsList }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.slice(0, 2);
      return ['pt', 'en'].includes(browserLang) ? browserLang : 'pt';
    }
    return 'pt';
  });
  const t = useTranslations(language);

  if (!t) return <div>Carregando...</div>;

  // Filtra a lista de formações e skills pelo idioma selecionado
  const filteredEducationList = educationList.filter(edu => edu.lang === language);
  const hadSkillsList = skillsList[0]['HadSkills']

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header
        t={t}
        language={language}
        setLanguage={setLanguage}
        onNavigate={() => {}}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 8, gap: 4 }}>
        <Education t={t} educationList={filteredEducationList} />
        <Box sx={{ width: '100%', maxWidth: 900, my: 4 }}>
          <Divider sx={{ borderColor: 'rgba(128,128,128,0.15)', borderWidth: 1, borderRadius: 2 }} />
        </Box>
        <Skills t={t} skillsList={hadSkillsList} />
      </Box>
    </Box>
  );
}
