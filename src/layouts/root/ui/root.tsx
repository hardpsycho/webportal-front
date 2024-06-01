import { Outlet } from 'react-router-dom'
import { clsx } from 'clsx'
import { FC, Suspense } from 'react'

import { Navbar } from '@widgets/navbar'
import { useTheme } from '@shared/libs/theme'
import { Sidebar } from '@widgets/sidebar/ui/sidebar'
import styles from './root.m.scss'
import { PageLoader } from '@shared/ui/pageLoader'
import { ErrorBoundary } from '@shared/ui/errorBoundary'
import { ErrorPage } from '@pages/errorPage'

interface RootProps {}

const Root: FC<RootProps> = () => {
    const { theme } = useTheme()
    return (
        <div id="root" className={clsx('app', theme)}>
            <ErrorBoundary displayedError={<ErrorPage />}>
                <Navbar />
                <div className={styles.wrapper}>
                    <Sidebar />
                    <main className={styles.main}>
                        <ErrorBoundary displayedError={<ErrorPage />}>
                            <Suspense fallback={<PageLoader />}>
                                <Outlet />
                            </Suspense>
                        </ErrorBoundary>
                    </main>
                </div>
            </ErrorBoundary>
        </div>
    )
}

export { Root }
