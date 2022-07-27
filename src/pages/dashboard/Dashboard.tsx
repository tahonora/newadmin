import { InstaFeed } from '../../shared/components/instafeed/instafeed'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { DetalheDePessoas } from '../pessoas/DetalheDePessoas'

export const Dashboard = () => {

  return (
    <LayoutBaseDePagina 
      titulo='Tulipa' 
      
      barraDeFerramentas={(
        <DetalheDePessoas />
      )} 
    >dsf
      
    </LayoutBaseDePagina>
  )
}