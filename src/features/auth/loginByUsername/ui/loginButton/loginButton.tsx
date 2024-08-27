import { Suspense, useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonVariant } from '@shared/ui/button'
import { ModalLoginFormLazy } from '../modalLoginForm/modalLoginForm.lazy'

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
            {isModalOpened && (
                <Suspense>
                    <ModalLoginFormLazy isOpen={isModalOpened} onClose={modalCloseHandler} />
                </Suspense>
            )}
        </>
    )
}

export { LoginButton }
