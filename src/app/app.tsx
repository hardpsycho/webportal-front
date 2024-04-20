import { type FC } from 'react'

import styles from './app.m.scss'

interface AppProps {}

const App: FC<AppProps> = () => {
    return <div className={styles.app}>Hello react!</div>
}

export { App }
