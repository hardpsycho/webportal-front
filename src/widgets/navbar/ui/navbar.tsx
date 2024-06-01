import { clsx } from 'clsx'
import { type FC } from 'react'

import { AppLink, AppLinkVariant } from '@shared/ui/appLink'
import styles from './navbar.m.scss'

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <header data-testid="navbar" className={clsx(styles.navbar, className)}>
            <div className={styles.links}>
                <AppLink to="/" variant={AppLinkVariant.INVERTED}>
                    Главная
                </AppLink>
                <AppLink to="/about" variant={AppLinkVariant.INVERTED}>
                    О нас
                </AppLink>
            </div>
        </header>
    )
}

export { Navbar }
