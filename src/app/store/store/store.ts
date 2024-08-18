import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { loginReducer } from '@features/auth/loginByUsername'
import { logupReducer } from '@features/auth/logupByUsername'
import { sessionReducer } from '@entities/session'
import { AppDispatch, StateSchema } from './../types/StateSchema'

export function configureCustomStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        loginForm: loginReducer,
        logupForm: logupReducer,
        session: sessionReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: WP_DEV,
        preloadedState: initialState as StateSchema
    })
}

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
