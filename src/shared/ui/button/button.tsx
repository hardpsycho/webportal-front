import { clsx } from 'clsx'
import { ButtonHTMLAttributes, type FC } from 'react'
import styles from './button.m.scss'

enum ButtonVariant {
    STANDART = 'standart',
    GHOST = 'ghost',
    INVERTED = 'inverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
}

const Button: FC<ButtonProps> = ({ children, variant = ButtonVariant.STANDART, className, ...otherProps }) => {
    console.log('classname', className);
    
    return (
        <button {...otherProps} className={clsx(styles.button, styles[variant], className)} >
            {children}
        </button>
    )
}

export { Button, ButtonVariant }