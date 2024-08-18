import { FormEvent, memo, useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import styles from './logupForm.m.scss'
import { logupActions } from '../../model/slice/logupSlice'
import { getLoginState } from '../../model/selectors/getLogupState/getLogupState'
import { Text, TextVariant } from '@shared/ui/text'
import { logupByUsername } from '@entities/session'
import { useAppDispatch } from '@app/store'

interface LogupFormProps {
    onClose?: () => void
}

const LogupForm: FC<LogupFormProps> = () => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(logupActions.setUsername(value))
        },
        [dispatch]
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(logupActions.setPassword(value))
        },
        [dispatch]
    )

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(logupByUsername({ email: username, password }))
    }

    return (
        <form onSubmit={onSubmitHandler} className={styles.form}>
            <Text title={t('logup-form')} />
            {error && <Text text={t(error)} variant={TextVariant.ERROR} />}
            <Input onChange={onChangeUsername} value={username} />
            <Input onChange={onChangePassword} value={password} type="password" />
            <Button disabled={isLoading}>{t('login')}</Button>
        </form>
    )
}

const MemoizedLogupForm = memo(LogupForm)

export { MemoizedLogupForm as LogupForm }
