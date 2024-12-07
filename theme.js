// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff7c00', // Orange color
    },
    secondary: {
      main: '#A367B1',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#333333',
    },
  },
  typography: {
    allVariants: {
      color: '#333333',
    },
  },
});

export default theme;