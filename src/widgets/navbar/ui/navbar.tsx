import { clsx } from 'clsx'
import { type FC } from 'react'
import { useSelector } from 'react-redux'

import { LoginButton } from '@features/auth/loginByUsername'
import styles from './navbar.m.scss'
import { getSessionState } from '@entities/session'
import { LogoutButton } from '@features/auth/logout'

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const sessionState = useSelector(getSessionState)
    const isAuth = sessionState.id !== null

    return (
        <header data-testid="navbar" className={clsx(styles.navbar, className)}>
            <div className={styles.buttons}>{isAuth ? <LogoutButton /> : <LoginButton />}</div>
        </header>
    )
}

export { Navbar }
