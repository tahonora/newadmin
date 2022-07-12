import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material'

interface IFerramentasDaListagemProps {
  textodeBusca?: string
  mostrarInputBusca?: boolean
  aoMudarTextoDeBusca?: (novoTexto: string) => void

  textoBotaoNovo?: string
  mostrarBotaoNovo?: boolean
  aoClicarEmNovo?: () => void

}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textodeBusca = '', 
  mostrarInputBusca = false, 
  aoMudarTextoDeBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo,

}) => {

  const theme = useTheme()

  return (
    <Box 
      marginX={1} 
      padding={1} 
      paddingX={2} 
      display='flex' 
      gap={1}
      alignItems='center'
      height={theme.spacing(5)} 
      component={Paper} 
    >
      { mostrarInputBusca && (
        <TextField
          size='small'
          value={textodeBusca}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
          placeholder='Pesquisar...'
        />

      )}
      <Box flex={1} display='flex' justifyContent='end' >
        {mostrarBotaoNovo && (
          <Button
            color='primary'
            disableElevation
            variant='contained'
            onClick={aoClicarEmNovo}
            endIcon={<Icon>add</Icon>}
          >{textoBotaoNovo}</Button>
        )}
      </Box>
      
    </Box>
  )

}