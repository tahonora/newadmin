import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { 
  Dashboard,
  ListagemDePessoas,
} from '../pages'
import { useDrawerContext } from '../shared/contexts'


export const AppRoutes = () => { 
  const { setDrawerOptions } = useDrawerContext ( )

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/home',
        label: 'Dashboard',
      },
      {
        icon: 'city',
        path: '/pessoas',
        label: 'Pessoas',
      },
    ])
  }, [])

  return (
    <Routes>
      <Route path='/home' element={<Dashboard />} />
      <Route path='/pessoas' element={<ListagemDePessoas />} />
      <Route path='*' element={<Navigate to='home' />}  />
    </Routes>
  )
}
