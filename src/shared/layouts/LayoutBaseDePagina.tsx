import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material'
import { ReactNode } from 'react'
import { Box } from '@mui/system'
import { useDrawerContext } from '../contexts'

interface ILayoutBaseDePagina {
  children: React.ReactNode
  titulo: string
  colors?: ReactNode
  barraDeFerramentas?: ReactNode
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePagina> = ({children, titulo, barraDeFerramentas}) => {

  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const theme = useTheme()
  const { toggleDrawerOpen } = useDrawerContext()

  return (
    <Box height='100%' display='flex' flexDirection='column' gap={1} >
      <Box padding={1} display='flex' alignItems='center' gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
        { smDown && (
          <IconButton onClick={toggleDrawerOpen} >
            <Icon>menu</Icon>
          </IconButton>        
        )}
        <Typography 
          overflow='hidden'
          whiteSpace='nowrap'
          textOverflow='ellipsis'
          variant={smDown ? 'h6' : mdDown ? 'h5' : 'h4' }
          fontFamily={'Arial'} 
          color={theme.palette.secondary.light}
        >
          {titulo}
        </Typography>
      </Box>

      {barraDeFerramentas && (
        <Box>
          {barraDeFerramentas}
        </Box>     
      )}

      <Box flex={1} overflow='auto' >
        {children}
      </Box>
    </Box>
  )
}