import pt from '../public/locales/pt.json';
import en from '../public/locales/en.json';

const MAP = { pt, en };

export function loadTranslation(initialLang) {
  const lang = (initialLang || 'pt').slice(0,2);
  return MAP[lang] || MAP.pt;
}
