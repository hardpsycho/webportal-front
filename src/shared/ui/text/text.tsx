import { clsx } from 'clsx'
import { type FC } from 'react'

import styles from './text.m.scss'

enum TextVariant {
    DEFAULT = 'default',
    ERROR = 'error'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    variant?: TextVariant
}

const Text: FC<TextProps> = ({ className, title, text, variant = TextVariant.DEFAULT }) => {
    return (
        <div className={clsx(styles.textWrapper, styles[variant], className)}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    )
}

export { Text, TextVariant }
