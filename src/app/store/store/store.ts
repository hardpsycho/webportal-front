import { configureStore } from '@reduxjs/toolkit'

import { StateSchema } from './../types/StateSchema'

export function configureCustomStore(initialState?: Partial<StateSchema>) {
    return configureStore<StateSchema>({
        reducer: {},
        devTools: WP_DEV,
        preloadedState: initialState
    })
}
