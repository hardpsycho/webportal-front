import { FormEvent, memo, useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import styles from './loginForm.m.scss'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { Text, TextVariant } from '@shared/ui/text'
import { loginByUsername } from '@entities/session'
import { useAppDispatch } from '@app/store'
import { useDynamicReducer } from '@shared/libs/useDynamicReducer'
import { UseDynamicReducerProps } from '@shared/libs/useDynamicReducer/useDynamicReducer'

interface LoginFormProps {
    onClose?: () => void
}

const dynamicReducers: UseDynamicReducerProps = [
    { key: 'loginForm', reducer: loginReducer, removeAfterUnmount: false }
]

const LoginForm: FC<LoginFormProps> = ({ onClose }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    useDynamicReducer(dynamicReducers)

    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch]
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch]
    )

    const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result = await dispatch(loginByUsername({ email: username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onClose?.()
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className={styles.form}>
            <Text title={t('login-form')} />
            {error && <Text text={t(error)} variant={TextVariant.ERROR} />}
            <Input onChange={onChangeUsername} value={username} />
            <Input onChange={onChangePassword} value={password} type="password" />
            <Button disabled={isLoading}>{t('login')}</Button>
        </form>
    )
}

const MemoizedLoginForm = memo(LoginForm)

export { MemoizedLoginForm as LoginForm }
