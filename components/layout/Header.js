import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import Link from 'next/link';

const socialLinks = [
  { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/rodrigo-cabral', label: 'LinkedIn' },
  { icon: <ArticleIcon />, url: 'https://medium.com/@rodrigo_cabral', label: 'Medium' },
  { icon: <GitHubIcon />, url: 'https://github.com/rodrigo-cabral', label: 'GitHub' },
];

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function LanguageMenu({ language, setLanguage }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (lang) => {
    setLanguage(lang);
    handleClose();
  };
  return (
    <>
      <IconButton color="inherit" sx={{ ml: 2 }} onClick={handleClick}>
        <LanguageIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: '#fff',
          },
        }}
      >
        <MenuItem
          selected={language === 'pt'}
          onClick={() => handleSelect('pt')}
          sx={{ color: '#111', ...(language === 'pt' && { backgroundColor: '#f5f5f5' }) }}
        >
          Português
        </MenuItem>
        <MenuItem
          selected={language === 'en'}
          onClick={() => handleSelect('en')}
          sx={{ color: '#111', ...(language === 'en' && { backgroundColor: '#f5f5f5' }) }}
        >
          English
        </MenuItem>
      </Menu>
    </>
  );
}

export default function Header({ t, language, setLanguage, onNavigate }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {t.header.name}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} href="/">{t.header.about}</Button>
           <Button color="inherit" component={Link} href="/education">{t.header.education}</Button>
          <Button color="inherit" component={Link} href="/experiences">{t.header.experience}</Button>
          <Button color="inherit" component={Link} href="/articles">{t.header.articles}</Button>
          <Button color="inherit" component={Link} href="/repositories">{t.header.repositories}</Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
          {socialLinks.map((link) => (
            <IconButton key={link.label} color="inherit" href={link.url} target="_blank" rel="noopener" aria-label={link.label}>
              {link.icon}
            </IconButton>
          ))}
        </Box>
        {/* Menu de seleção de idioma */}
        <LanguageMenu language={language} setLanguage={setLanguage} />
      </Toolbar>
    </AppBar>
  );
}

