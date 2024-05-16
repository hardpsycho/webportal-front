import { Outlet } from 'react-router-dom'
import { clsx } from 'clsx'

import { Navbar } from '@widgets/navbar'
import { FC } from 'react'

interface RootProps {}

const Root: FC<RootProps> = () => {
    return (
        <div id='root' className={clsx('app', 'hp-theme-light')}>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export { Root }
