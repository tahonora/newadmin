import { createTheme } from '@mui/material'
import { purple, red } from '@mui/material/colors'

export const LightTheme = createTheme({
  palette: {
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
      default: '#ffffff',
      paper: '#f7f6f3',
    },
  },
})
