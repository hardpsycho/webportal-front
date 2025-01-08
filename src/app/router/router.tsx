import { createBrowserRouter } from 'react-router-dom'

import { AboutPage } from '@pages/aboutPage'
import { MainPage } from '@pages/mainPage'
import { Root } from '@layouts/root'
import { NotFoundPage } from '@pages/notFoundPage'
import { ProfilePage } from '@pages/profilePage'
import { RequireAuth } from './requireAuth'
import { ArticlesPage } from '@pages/articlesPage'
import { ArticleDetailPage } from '@pages/articleDetailPage'

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
                element: (
                    <RequireAuth>
                        <ProfilePage />
                    </RequireAuth>
                )
            },
            {
                path: '/profile',
                element: (
                    <RequireAuth>
                        <ProfilePage />
                    </RequireAuth>
                )
            },
            {
                path: '/articles',
                element: (
                    <RequireAuth>
                        <ArticlesPage />
                    </RequireAuth>
                )
            },
            {
                path: '/articles/:id',
                element: (
                    <RequireAuth>
                        <ArticleDetailPage />
                    </RequireAuth>
                )
            },
            {
                path: '/*',
                element: <NotFoundPage />
            }
        ]
    }
])
