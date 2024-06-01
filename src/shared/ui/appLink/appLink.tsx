import { clsx } from 'clsx'
import { ReactNode, type FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import styles from './appLink.m.scss'

enum AppLinkVariant {
    STANDART = 'standart-color',
    INVERTED = 'inverted-color'
}

interface AppLinkProps extends LinkProps {
    children?: ReactNode
    className?: string
    variant?: AppLinkVariant
}

const AppLink: FC<AppLinkProps> = ({
    children,
    to,
    className,
    variant = AppLinkVariant.STANDART,
    ...otherProps
}) => {
    return (
        <Link {...otherProps} to={to} className={clsx(styles.appLink, className, styles[variant])}>
            {children}
        </Link>
    )
}

export { AppLink, AppLinkVariant }
