import { Box, Paper, Typography, useTheme } from '@mui/material'
import { LayoutBaseDePagina } from '../../shared/layouts'

export const Sobre: React.FC = () => {

  const theme = useTheme()

  return (
    <LayoutBaseDePagina 
      titulo='Sobre'
    >
      <Box
        component={Paper}
        variant='outlined' 
        display='flex'
        sx={{ m: 1, width: 'auto' }}
      >
        <Typography
          overflow='hidden'
          whiteSpace='nowrap'
          textOverflow='ellipsis'
          fontFamily={'Arial'} 
          color={theme.palette.secondary.light}        
        >
          A flora tulipa faz arranjos naturais sofisticados 
          que ativam memórias afetivas e tornam ambientes aconchegantes para pessoas.
        </Typography>  
      </Box>
    </LayoutBaseDePagina>
  )
}
