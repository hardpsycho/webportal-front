import { type FC } from 'react'

import styles from './pageLoader.m.scss'

interface PageLoaderProps {}

const PageLoader: FC<PageLoaderProps> = () => {
    return (
        <div>
            <svg className={styles.spinner} viewBox="0 0 50 50">
                <circle
                    className={styles.path}
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                ></circle>
            </svg>
        </div>
    )
}

export { PageLoader }
