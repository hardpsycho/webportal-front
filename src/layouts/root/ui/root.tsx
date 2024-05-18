import { Outlet } from 'react-router-dom'
import { clsx } from 'clsx'

import { Navbar } from '@widgets/navbar'
import { FC, Suspense } from 'react'
import { useTheme } from '@shared/libs/theme'

interface RootProps {}

const Root: FC<RootProps> = () => {
    const { theme } = useTheme();
    return (
        <div id='root' className={clsx('app', theme)}>
            <Navbar />
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}

export { Root }
