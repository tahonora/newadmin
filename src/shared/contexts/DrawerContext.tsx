import { createContext, useCallback, useContext, useState } from 'react'

interface IDrawerContextData {
  isDrawerOpen: boolean,
  toggleDrawerOpen: () => void
}

const DrawerContext = createContext({ } as IDrawerContextData )

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}

interface IAppProviderProps {
  children: React.ReactNode
}

export const DrawerProvider: React.FC<IAppProviderProps> = ({ children }) => {
  const [ isDrawerOpen, setIsDrawerOpen ] = useState(false)

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(olDrawerOpen => !olDrawerOpen)
  }, [])

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen}}>
      { children }
    </DrawerContext.Provider>
  )
}
