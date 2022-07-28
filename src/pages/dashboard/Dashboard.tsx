import { LayoutBaseDePagina } from '../../shared/layouts'
import { ListagemDeInstagram } from '../instagram/ListagemDeInstagram'
import { Lojas } from '../lojas/Lojas'

export const Dashboard = () => {

  return (
    <LayoutBaseDePagina 
      titulo='Tulipa' 
      
      barraDeFerramentas={(
        <>
          <ListagemDeInstagram />
          <Lojas />
        </>
      )} 
    >      
    </LayoutBaseDePagina>
  )
}