import { LinearProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FerramentasDeDetalhe } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { PessoasService } from '../../shared/services/api/pessoas/PessoasService'

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [nome, setNome] = useState('')

  useEffect(() => {
    if(id !== 'nova'){      
      setIsLoading(true)  
      PessoasService.getById(Number(id))
        .then((result) => {
          setIsLoading(false)  
          if(result instanceof Error) {
            alert(result.message)
            navigate('/pessoas')
          } else {
            setNome(result.nomecompleto)
            console.log(result)
          }
        })
    }
  }, [id])

  const handleSave = () => {
    console.log('save')
  }

  const handleDelete = (id: number) => {
    if(confirm('Realmente deseja apagar?')){
      PessoasService.deleteById(id)
        .then((result) => {
          if(result instanceof Error) {
            alert(result.message)
          } else {            
            alert('Registro apagado com sucesso')
            navigate('/pessoas')
          }
        })
    }
  }  

  return (
    <LayoutBaseDePagina
      titulo={String(id) === 'nova' ? 'Nova pessoa' : nome }
      barraDeFerramentas={
        <FerramentasDeDetalhe 
          textoBotaoNovo='Nova' 
          mostrarBotaoSalvarEFechar 
          mostrarBotaoNovo={String(id) !== 'nova' }
          mostrarBotaoApagar={String(id) !== 'nova' } 

          aoClicarEmSalvar={ handleSave }
          aoClicarEmSalvarEFechar={ handleSave }
          aoClicarEmApagar={ () => handleDelete(Number(id)) }
          aoClicarEmNovo={ () => navigate('/pessoas/detalhe/nova') }
          aoClicarEmVoltar={ () => navigate('/pessoas') }
        />
      }
    >
      {isLoading && (
        <LinearProgress variant='indeterminate' />    
      )}

      <p> Cria????o {id}</p> 

    </LayoutBaseDePagina>
  )  
}