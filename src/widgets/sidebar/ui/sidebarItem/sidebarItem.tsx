import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { clsx } from 'clsx'

import { AppLink, AppLinkVariant } from '@shared/ui/appLink'
import styles from './sidebarItem.m.scss'

interface SidebarItemProps {
    to: string
    icon: JSX.Element
    title: string
    collapsed: boolean
    className?: string
}

const SidebarItem: FC<SidebarItemProps> = ({ to, icon, title, collapsed, className }) => {
    const { t } = useTranslation()

    return (
        <AppLink className={clsx(styles.link, className)} to={to} variant={AppLinkVariant.INVERTED}>
            {icon}
            <p className={clsx({ [styles.linkTitle]: collapsed })}>{t(title)}</p>
        </AppLink>
    )
}

const SidebarItemMemo = memo(SidebarItem)

export { SidebarItemMemo as SidebarItem }
