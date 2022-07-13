import { FerramentasDeDetalhe } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'

export const Dashboard = () => {

  return (
    <LayoutBaseDePagina 
      titulo='Dashboard' 
      barraDeFerramentas={(
        <FerramentasDeDetalhe 
          mostrarBotaoNovo
          mostrarBotaoSalvarEFechar
          mostrarBotaoSalvarEFecharCarregando
          mostrarBotaoVoltar={true}

        />
      )} 
    >Testando</LayoutBaseDePagina>
  )
}