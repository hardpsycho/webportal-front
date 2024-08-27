import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { useDispatch, useStore } from 'react-redux'

import { sessionReducer } from '@entities/session'
import { AppDispatch, AppStore, StateSchema } from './../types/StateSchema'
import { createReducerManager } from '../reducerMananger/reducerManager'

export function configureCustomStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        session: sessionReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store: AppStore = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: WP_DEV,
        preloadedState: initialState
    })

    store.reducerManager = reducerManager

    return store
}

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppStore = useStore.withTypes<AppStore>()
