import { clsx } from 'clsx'
import { useState, type FC } from 'react'

import { Button, ButtonVariant } from '@shared/ui/button'
import { LanguageSwitcher } from '@shared/ui/languageSwitcher'
import { ThemeSwitcher } from '@shared/ui/themeSwither'
import styles from './sidebar.m.scss'
import MenuIcon from '../assets/IconMenu.svg'
import HomeLight from '../assets/home-light.svg'
import AboutLight from '../assets/profile-light.svg'
import ProfileLight from '../assets/user-light.svg'
import { AppLink, AppLinkVariant } from '@shared/ui/appLink'

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
        <aside
            data-testid="sidebar"
            className={clsx(styles.sidebar, { [styles.collapsed]: isCollapsed })}
        >
            <div>
                <Button
                    className={styles.sidebarBtn}
                    variant={ButtonVariant.GHOST}
                    onClick={() => setIsCollapsed((prev) => !prev)}
                >
                    <MenuIcon />
                </Button>
                <div className={styles.links}>
                    <AppLink className={styles.link} to="/" variant={AppLinkVariant.INVERTED}>
                        <HomeLight />
                        <p className={styles.linkTitle}>Главная</p>
                    </AppLink>
                    <AppLink className={styles.link} to="/about" variant={AppLinkVariant.INVERTED}>
                        <AboutLight />
                        <p className={styles.linkTitle}>О нас</p>
                    </AppLink>
                    <AppLink
                        className={styles.link}
                        to="/profile"
                        variant={AppLinkVariant.INVERTED}
                    >
                        <ProfileLight />
                        <p className={styles.linkTitle}>Профиль</p>
                    </AppLink>
                </div>
            </div>
            <div className={clsx(styles.switchers)}>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
        </aside>
    )
}

export { Sidebar }
