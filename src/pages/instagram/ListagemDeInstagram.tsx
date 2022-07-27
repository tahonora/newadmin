import { 
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  LinearProgress,
  Pagination,
  Paper,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';

import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { FerramentasDaListagem } from '../../shared/components'
import { Environment } from '../../shared/environment'
import { useDebounce } from '../../shared/hooks'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { IListagemInstagram, InstagramService } from '../../shared/services/api/instagram/InstagramService'


export const ListagemDeInstagram: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { debounce } = useDebounce(3000)
  const navigate = useNavigate()

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
            console.log(result.datas)
          }
        })
    })
  }, [busca, pagina])

  return (  
    <LayoutBaseDePagina 
      titulo='Ultimas Postagens Instagram'
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca
          textodeBusca={busca}
          aoMudarTextoDeBusca={texto => setSearchParams({busca: texto, pagina: '1' }, { replace: true})}      
        />
      }  
    >
      <ImageList
        component={Paper} 
        sx={{ m: 1, width: 'auto' }}
        cols={5}      
        rowHeight={'auto'}
      >        
        {
          rows.map(item => 
            <ImageListItem 
              key={item.id}
              component={Box}
              overflow='hidden'
            >
              <Box
                sx={{
                  height: 433,
                  width: 450,
                  padding: 1,
                  maxHeight: { xs: 333, md: 167 },
                  maxWidth: { xs: 450, md: 250 },
                  gap: 1,                   
                }}         
                flex={1}  
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
                    onClick={() => <Link to={item.permalink} />
                    //  navigate(`${item.permalink}`)
                    }
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