import { createTheme } from '@mui/material/styles';

// головний колір — ізумруд (≈ Tailwind emerald‑500)
const EMERALD = {
  50:  '#e0f7ea',
  100: '#b8eccf',
  200: '#8cdfb3',
  300: '#60d297',
  400: '#3fcc82',
  500: '#2ecc71',   // базовий
  600: '#26b968',
  700: '#1ca05b',
  800: '#15874e',
  900: '#0a5e36',
};

export const theme = createTheme({
  palette: {
    mode: 'light',          // можна змінювати на 'dark'
    primary: {
      main: EMERALD[500],
      light: EMERALD[300],
      dark: EMERALD[700],
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#424242',       // сірий для акцентів
    },
  },
  shape: { borderRadius: 8 }, // трохи плавніші кути
});
