import { createBrowserRouter } from 'react-router-dom'

import { AboutPage } from '@pages/aboutPage'
import { MainPage } from '@pages/mainPage'
import { Root } from '@layouts/root'
import { NotFoundPage } from '@pages/notFoundPage'
import { ProfilePage } from '@pages/profilePage'

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
                path: '/profile/:id',
                element: <ProfilePage />
            },
            {
                path: '/profile',
                element: <ProfilePage />
            },
            {
                path: '/*',
                element: <NotFoundPage />
            }
        ]
    }
])
