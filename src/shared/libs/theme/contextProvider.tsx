import { FC, ReactNode, useState } from "react"
import { ThemeContext } from "./createContext"
import { Theme } from "./types"

const LC_HP_THEME_KEY = 'hp-theme'

const savedThem = localStorage.getItem(LC_HP_THEME_KEY) as Theme

export const ThemeProvider: FC<{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(savedThem || Theme.LIGHT)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LC_HP_THEME_KEY, newTheme)
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
