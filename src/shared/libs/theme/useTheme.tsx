import { useContext } from 'react'

import { ThemeContext } from './createContext'
import { Theme } from './types'

type UseThemeReturned = {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = (): UseThemeReturned => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return {
        theme,
        toggleTheme
    }
}
