import { configureStore, ReducersMapObject, Tuple, UnknownAction } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-unresolved
import { Middlewares } from '@reduxjs/toolkit/dist/configureStore'
import { useDispatch, useStore } from 'react-redux'

import { sessionReducer } from '@entities/session'
import { AppDispatch, AppStore, StateSchema } from './../types/StateSchema'
import { createReducerManager } from '../reducerMananger/reducerManager'
import { api } from '@shared/api/instance'

export function configureCustomStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        session: sessionReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store: AppStore = configureStore<
        StateSchema,
        UnknownAction,
        Tuple<Middlewares<StateSchema>>
    >({
        reducer: reducerManager.reduce,
        devTools: WP_DEV,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: api
                    }
                }
            })
    })

    store.reducerManager = reducerManager

    return store
}

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppStore = useStore.withTypes<AppStore>()
