import { FormEvent, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import styles from './loginForm.m.scss'

interface LoginFormProps {
    onClose?: () => void
}

const LoginForm: FC<LoginFormProps> = ({ onClose }) => {
    const { t } = useTranslation()

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onClose?.()
    }

    return (
        <form onSubmit={onSubmitHandler} className={styles.form}>
            <Input />
            <Input type="password" />
            <Button>{t('login')}</Button>
        </form>
    )
}

export { LoginForm }
