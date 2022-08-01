import { 
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  LinearProgress,
  Pagination,
  useTheme,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';

import { useEffect, useMemo, useState } from 'react'
import { FerramentasDaListagem } from '../../shared/components'
import { Environment } from '../../shared/environment'
import { useDebounce } from '../../shared/hooks'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { IListagemInstagram, InstagramService } from '../../shared/services/api/instagram/InstagramService'
import { useSearchParams } from 'react-router-dom';

export const ListagemDeInstagram: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { debounce } = useDebounce(3000)

  const [rows, setRows] = useState<IListagemInstagram[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const busca = useMemo(() => {
    return searchParams.get('busca') || ''
  }, [searchParams])

  const pagina = useMemo(() => {
    return Number(searchParams.get('pagina') || 1)
  }, [searchParams])

  useEffect(() => {
    setIsLoading(true)
    debounce(() => {
      InstagramService.getFeedInstagram()
        .then((result) => {
          setIsLoading(false)
          if(result instanceof Error) {
            alert(result.message)
            return
          } else {
            setRows(result.datas)
            setTotalCount(result.totalCount)
          }
        })
    })
  }, [busca, pagina])

  const theme = useTheme()

  return (  
    <LayoutBaseDePagina 
      titulo='Últimas postagens insta'
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca
          textodeBusca={busca}
          aoMudarTextoDeBusca={texto => setSearchParams({busca: texto, pagina: '1' }, { replace: true})}      
        />
      }  
    >
      <ImageList        
        sx={{ height: theme.spacing(145), width: theme.spacing(145) }}        
        component={Box}
        display='flex'
        flexDirection={'row'} 
        padding={1} 
        gap={1}
        cols={3}
        overflow={'hidden'}
      >
        {
          rows.map(item => 
            <ImageListItem 
              key={item.id}
              component={Box}
              sx={{ height: theme.spacing(45), width: theme.spacing(45) }}        
            >
              <Box
                sx={{ height: '100%', width: '100%' }}        
                component='img'
                src={`${item.media_url}`}                   
                alt={`${item.caption}`} 
              />
              <ImageListItemBar
                title={item.caption}
                subtitle={item.username}
                actionIcon={
                  <IconButton 
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.caption}`}                    
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>,
          )

        }
      </ImageList>
      {isLoading && (
        <LinearProgress variant='indeterminate' />
      )}  
      {(totalCount > 0 && totalCount > Environment.LIMITE_DE_LINHAS ) && (
        <Pagination 
          page={pagina}
          count={Math.ceil(totalCount / Environment.LIMITE_DE_LINHAS) } 
          onChange={(_, newPage) => setSearchParams({busca, pagina: newPage.toString()}, {replace: true})}
        />
      )}
    </LayoutBaseDePagina>    
  )
}