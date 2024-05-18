import { Outlet } from 'react-router-dom'
import { clsx } from 'clsx'

import { Navbar } from '@widgets/navbar'
import { FC, Suspense } from 'react'
import { useTheme } from '@shared/libs/theme'
import { Sidebar } from '@widgets/sidebar/ui/sidebar'
import styles from './root.m.scss'

interface RootProps {}

const Root: FC<RootProps> = () => {
    const { theme } = useTheme();
    return (
        <div id='root' className={clsx('app', theme)}>
            <Navbar />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
        </div>
    )
}

export { Root }
