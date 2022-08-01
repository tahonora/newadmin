import { LayoutBaseDePagina } from '../../shared/layouts'
import { ListagemDeInstagram } from '../instagram/ListagemDeInstagram'
import { Lojas } from '../lojas/Lojas'
import { Sobre } from '../sobre/Sobre'

export const Dashboard = () => {

  return (
    <LayoutBaseDePagina 
      titulo='' 
      
      barraDeFerramentas={(
        <>
          <ListagemDeInstagram />
          <Lojas />
          <Sobre />
        </>
      )} 
    >      
    </LayoutBaseDePagina>
  )
}