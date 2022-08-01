import { Box, Paper } from '@mui/material'
import { LayoutBaseDePagina } from '../../shared/layouts'

export const Lojas: React.FC = () => {

  return (
    <LayoutBaseDePagina 
      titulo='Localização'
    >
      <Box
        component={Paper}
        variant='outlined' 
        display='flex'
        sx={{ m: 1, width: 'auto' }}
      >
        <Box
          component={Paper}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.871044607693!2d-44.02389798546973!3d-19.97192474477103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6be09b296b3ab%3A0x731371d116758bb1!2sOutlet%20Casa%20e%20Jardim!5e0!3m2!1spt-BR!2sbr!4v1659323242567!5m2!1spt-BR!2sbr" 
            width="500" 
            height="350" 
            loading="lazy" 
          />
        </Box>
        <Box
          component={Paper}
          variant='outlined' 
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.59651083251!2d-43.989919085470284!3d-19.94140094381274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6976797007e09%3A0xe3b38383c5b39421!2sFlora%20Tulipa!5e0!3m2!1spt-BR!2sbr!4v1658865543598!5m2!1spt-BR!2sbr" 
            width="500" 
            height="350" 
            loading="lazy" 
          /> 
        </Box>
      </Box>
    </LayoutBaseDePagina>
  )
}
