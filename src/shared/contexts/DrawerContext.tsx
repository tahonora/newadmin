import { createContext, useCallback, useContext, useState } from 'react'

interface IDrawerOption {
  icon: string
  path: string  
  label: string
}

interface IDrawerContextData {
  isDrawerOpen: boolean,
  toggleDrawerOpen: () => void,
  drawerOptions: IDrawerOption[]
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void
}

interface IAppProviderProps {
  children: React.ReactNode
}

const DrawerContext = createContext({ } as IDrawerContextData )

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<IAppProviderProps> = ({ children }) => {
  const [ isDrawerOpen, setIsDrawerOpen ] = useState(false)
  const [ drawerOptions, setIsDrawerOptions ] = useState<IDrawerOption[]>([])

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(olDrawerOpen => !olDrawerOpen)
  }, [])

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setIsDrawerOptions(newDrawerOptions)
  }, [])

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
      { children }
    </DrawerContext.Provider>
  )
}
