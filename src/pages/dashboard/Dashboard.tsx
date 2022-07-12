import { FerramentasDeDetalhe } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'

export const Dashboard = () => {

  return (
    <LayoutBaseDePagina 
      titulo='Dashboard' 
      barraDeFerramentas={(
        <FerramentasDeDetalhe />
      )} 
    >Testando</LayoutBaseDePagina>
  )
}