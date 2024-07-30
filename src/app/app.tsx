import { Suspense, type FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import './styles/main.scss'
import { router } from './router/router'
import { ThemeProvider } from '@shared/libs/theme'
import '@shared/libs/i18n'
import { StoreProvider } from './store'

interface AppProps {}

const App: FC<AppProps> = () => {
    return (
        <StoreProvider>
            <ThemeProvider>
                <Suspense fallback={<div>Loading...</div>}>
                    <RouterProvider router={router} />
                </Suspense>
            </ThemeProvider>
        </StoreProvider>
    )
}

export { App }
