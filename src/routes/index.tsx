import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { 
  Dashboard,
  DetalheDePessoas,
  ListagemDeInstagram,
  ListagemDePessoas,
} from '../pages'
import { Lojas } from '../pages/lojas/Lojas'
import { useDrawerContext } from '../shared/contexts'


export const AppRoutes = () => { 
  const { setDrawerOptions } = useDrawerContext ( )

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/home',
        label: 'Home',
      },
      {
        icon: 'yard',
        path: '/tulipa',
        label: 'A Tulipa',
      },
      {
        icon: 'people',
        path: '/pessoas',
        label: 'Depoimentos',
      },
      {
        icon: 'facebook',
        path: '/instagram',
        label: 'Instagram',
      },
      {
        icon: 'contacts',
        path: '/contato',
        label: 'Contato',
      },
      {
        icon: 'map',
        path: '/lojas',
        label: 'Nossas Lojas',
      },
    ])
  }, [])

  return (
    <Routes>
      <Route path='/home' element={<Dashboard />} />
      <Route path='/pessoas' element={<ListagemDePessoas />} />
      <Route path='/pessoas/detalhe/:id' element={<DetalheDePessoas />} />
      <Route path='/instagram' element={<ListagemDeInstagram /> } />
      <Route path='/contato' element={<Lojas /> } />
      <Route path='/lojas' element={<Lojas /> } />
      <Route path='*' element={<Navigate to='home' />}  />
    </Routes>
  )
}

