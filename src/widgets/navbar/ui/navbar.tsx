import { AppLink, AppLinkVariant } from '@shared/ui/appLink'
import { ThemeSwitcher } from '@shared/ui/themeSwither'
import { clsx } from 'clsx'
import { type FC } from 'react'
import styles from './navbar.m.scss'

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <header className={clsx(styles.navbar, className)}>
            <ThemeSwitcher />
            <div className={styles.links}>
                <AppLink to='/' variant={AppLinkVariant.INVERTED}>Главная</AppLink>
                <AppLink to='/about' variant={AppLinkVariant.INVERTED}>О нас</AppLink>
            </div>
        </header>
    )
}

export { Navbar }
