import { clsx } from 'clsx'
import { type FC } from 'react'

import styles from './navbar.m.scss'

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <header data-testid="navbar" className={clsx(styles.navbar, className)}>
            <div className={styles.links}></div>
        </header>
    )
}

export { Navbar }
