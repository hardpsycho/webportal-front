import { Suspense, useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonVariant } from '@shared/ui/button'
import { ModalLogupFormLazy } from '../modalLogupForm/modalLogupForm.lazy'

interface LogupButtonProps {
    className?: string
}

const LogupButton: FC<LogupButtonProps> = () => {
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
                {t('logup')}
            </Button>
            {isModalOpened && (
                <Suspense>
                    <ModalLogupFormLazy isOpen={isModalOpened} onClose={modalCloseHandler} />
                </Suspense>
            )}
        </>
    )
}

export { LogupButton }
