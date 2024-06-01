import { createContext } from 'react'

import { Theme } from './types'

type ThemeContextProps = {
    theme: Theme
    toggleTheme: () => void
}

const defaultValue = {
    theme: Theme.LIGHT,
    toggleTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextProps>(defaultValue)
