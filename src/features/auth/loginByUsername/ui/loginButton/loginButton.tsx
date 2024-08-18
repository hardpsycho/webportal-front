import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonVariant } from '@shared/ui/button'
import { ModalLoginForm } from '../modalLoginForm/modalLoginForm'

interface LoginButtonProps {
    className?: string
}

const LoginButton: FC<LoginButtonProps> = () => {
    const { t } = useTranslation()
    const [isModalOpened, setIsModalOpened] = useState(false)

    const modalOpenHandler = () => {
        setIsModalOpened(true)
    }

    const modalCloseHandler = () => {
        setIsModalOpened(false)
    }

    return (
        <>
            <Button variant={ButtonVariant.GHOST} onClick={modalOpenHandler}>
                {t('login')}
            </Button>
            <ModalLoginForm isOpen={isModalOpened} onClose={modalCloseHandler} />
        </>
    )
}

export { LoginButton }
