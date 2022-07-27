import { createTheme } from '@mui/material'
import { purple, red } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: red[700],
      dark: red[800],
      light: red[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: purple[500], 
      dark: purple[400],
      light: purple[300],
      contrastText: '#ffffff',
    },
    background: {
      default: '#303134',
      paper: '#202124',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    },
    
  },
})




