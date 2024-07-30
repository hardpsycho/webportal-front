import { clsx } from 'clsx'
import { InputHTMLAttributes, MutableRefObject, type FC, memo } from 'react'

import styles from './input.m.scss'

type CustomInputAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends CustomInputAttributes {
    className?: string
    value?: string
    onChange?: (value: string) => void
    ref?: MutableRefObject<HTMLInputElement>
}

const Input: FC<InputProps> = ({ value, onChange, className, ref, ...otherProps }) => {
    return (
        <input
            {...otherProps}
            className={clsx(styles.input, className)}
            value={value}
            onChange={(e) => onChange?.(e.currentTarget.value)}
            ref={ref}
        />
    )
}

const InputMemo = memo(Input)

export { InputMemo as Input }
