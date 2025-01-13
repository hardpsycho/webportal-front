import { EnhancedStore, StoreEnhancer, ThunkDispatch, Tuple, UnknownAction } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'

import { SessionSchema } from '@entities/session'
import { LoginSchema } from '@features/auth/loginByUsername'
import { configureCustomStore } from '../store/store'
import { createReducerManager } from '../reducerMananger/reducerManager'
import { ArticleSchema } from '@entities/article'

export interface StateSchema {
    loginForm?: LoginSchema
    article?: ArticleSchema
    session: SessionSchema
}

export type AppStore = EnhancedStore<
    StateSchema,
    UnknownAction,
    Tuple<
        [
            StoreEnhancer<{
                dispatch: ThunkDispatch<
                    StateSchema,
                    {
                        api: AxiosInstance
                    },
                    UnknownAction
                >
            }>,
            StoreEnhancer
        ]
    >
> & { reducerManager?: ReturnType<typeof createReducerManager> }

export type AppDispatch = ReturnType<typeof configureCustomStore>['dispatch']
export type AppState = ReturnType<ReturnType<typeof configureCustomStore>['getState']>
export type ExtraArgs = { rejectValue: string; extra: { api: AxiosInstance } }
