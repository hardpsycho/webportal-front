import { clsx } from 'clsx'
import { useState, type FC } from 'react'

import { Button, ButtonVariant } from '@shared/ui/button'
import { LanguageSwitcher } from '@shared/ui/languageSwitcher'
import { ThemeSwitcher } from '@shared/ui/themeSwither'
import styles from './sidebar.m.scss'
import MenuIcon from '../../assets/IconMenu.svg'
import { sidebarItems } from '@widgets/sidebar/config'
import { SidebarItem } from '../sidebarItem/sidebarItem'

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
                    {sidebarItems.map((sidebarItem) => {
                        return (
                            <SidebarItem
                                key={sidebarItem.to}
                                icon={sidebarItem.icon}
                                to={sidebarItem.to}
                                title={sidebarItem.title}
                                collapsed={isCollapsed}
                            />
                        )
                    })}
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
