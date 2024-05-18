import { Button, ButtonVariant } from '@shared/ui/button';
import { LanguageSwitcher } from '@shared/ui/languageSwitcher';
import { ThemeSwitcher } from '@shared/ui/themeSwither';
import { clsx } from 'clsx';
import { useState, type FC } from 'react'
import styles from './sidebar.m.scss'

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <aside className={clsx(styles.sidebar, {[styles.collapsed]: isCollapsed})}>
            <div className={clsx(styles.switchers)}>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
            <Button className={styles.sidebarBtn} variant={ButtonVariant.GHOST} onClick={() => setIsCollapsed(prev => !prev)}>{isCollapsed ? '>' : '<'}</Button>
        </aside>
    )
}

export { Sidebar }
