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
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const socialLinks = [
  { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/rodrigo-cabral-0280b3121/', label: 'LinkedIn' },
  { icon: <GitHubIcon />, url: 'https://github.com/RodrigoOBC', label: 'GitHub' },
  { icon: <ArticleIcon />, url: 'https://medium.com/@rodrigo.oliveiracabral', label: 'Medium' },
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { label: t.header.about, href: '/' },
    { label: t.header.education, href: '/education' },
    { label: t.header.experience, href: '/experiences' },
    { label: t.header.articles, href: '/articles' },
    { label: t.header.repositories, href: '/repositories' },
  ];

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {t.header.name}
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="start"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              <Box
                sx={{ width: 250, bgcolor: '#fff', height: '100%', minHeight: '100vh', color: '#111' }}
                role="presentation"
                onClick={handleDrawerToggle}
                onKeyDown={handleDrawerToggle}
              >
                <List>
                  {navLinks.map((item) => (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton component={Link} href={item.href} sx={{ color: '#111' }}>
                        <ListItemText primary={item.label} sx={{ color: '#111' }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, my: 2 }}>
                  {socialLinks.map((link) => (
                    <Tooltip title={link.label} arrow key={link.label}>
                      <IconButton color="inherit" href={link.url} target="_blank" rel="noopener" aria-label={link.label}>
                        {link.icon}
                      </IconButton>
                    </Tooltip>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <LanguageMenu language={language} setLanguage={setLanguage} />
                </Box>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navLinks.map((item) => (
                <Button color="inherit" component={Link} href={item.href} key={item.label}>
                  {item.label}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
              {socialLinks.map((link) => (
                <Tooltip title={link.label} arrow key={link.label}>
                  <IconButton color="inherit" href={link.url} target="_blank" rel="noopener" aria-label={link.label}>
                    {link.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
            <LanguageMenu language={language} setLanguage={setLanguage} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}


