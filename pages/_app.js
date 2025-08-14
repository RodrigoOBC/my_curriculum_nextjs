import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a29cf', // azul personalizado
    },
    secondary: {
      main: '#000', // preto para botão selecionado
    },
    background: {
      default: '#fff', // branco
      paper: '#000', // preto para papel
    },
    text: {
      primary: '#000',
      secondary: '#1a29cf',
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
