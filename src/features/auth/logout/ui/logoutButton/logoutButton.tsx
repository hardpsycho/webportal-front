import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonVariant } from '@shared/ui/button'
import { removeSession } from '@entities/session'
import { useAppDispatch } from '@app/store'

interface LogoutButtonProps {
    className?: string
}

const LogoutButton: FC<LogoutButtonProps> = () => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const logoutHandler = () => {
        dispatch(removeSession({}))
    }

    return (
        <>
            <Button variant={ButtonVariant.GHOST} onClick={logoutHandler}>
                {t('logout')}
            </Button>
        </>
    )
}

export { LogoutButton }
