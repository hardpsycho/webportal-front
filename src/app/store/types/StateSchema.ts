import { SessionSchema } from '@entities/session'
import { LoginSchema } from '@features/auth/loginByUsername'
import { LogupSchema } from '@features/auth/logupByUsername'
import { configureCustomStore } from '../store/store'

export interface StateSchema {
    loginForm: LoginSchema
    logupForm: LogupSchema
    session: SessionSchema
}

export type AppDispatch = ReturnType<typeof configureCustomStore>['dispatch']
