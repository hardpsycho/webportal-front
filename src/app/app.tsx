import { Suspense, type FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from './router/router'

interface AppProps {}

const App: FC<AppProps> = () => {
    return <>
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    </>
}

export { App }
