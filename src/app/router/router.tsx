import { createBrowserRouter } from 'react-router-dom'

import { AboutPage } from '@pages/aboutPage'
import { MainPage } from '@pages/mainPage'
import { Root } from '@layouts/root'
import { NotFoundPage } from '@pages/notFoundPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/*',
                element: <NotFoundPage />
            }
        ]
    }
])
