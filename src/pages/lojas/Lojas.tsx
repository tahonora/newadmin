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
        display='block' 
        alignItems={'center'}        
      >
        <Box
          component={Paper}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.593468474259!2d-43.99021688547032!3d-19.941529043816743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69651c375fd31%3A0xe72fdbe68e03765!2sAv.%20Teresa%20Cristina%2C%205750%20-%20Nova%20Gameleira%2C%20Belo%20Horizonte%20-%20MG%2C%2030510-410!5e0!3m2!1spt-BR!2sbr!4v1658865283564!5m2!1spt-BR!2sbr" 
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
