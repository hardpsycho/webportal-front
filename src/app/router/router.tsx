import { createBrowserRouter } from 'react-router-dom'

import { AboutPage } from '@pages/aboutPage'
import { MainPage } from '@pages/mainPage'

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            }
        ]
    }
])
