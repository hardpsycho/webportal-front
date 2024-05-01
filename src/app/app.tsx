import { Suspense, type FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import './styles/main.scss'
import { router } from './router/router'
import { ThemeProvider } from '@shared/libs/theme'

interface AppProps {}

const App: FC<AppProps> = () => {
    return (
        <ThemeProvider>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router} />
            </Suspense>
        </ThemeProvider>
    )
}

export { App }
