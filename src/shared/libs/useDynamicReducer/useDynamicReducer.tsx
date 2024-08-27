import { Reducer } from '@reduxjs/toolkit'
import { useEffect } from 'react'

import { StateSchema, useAppDispatch, useAppStore } from '@app/store'

interface ReducerProps {
    key: keyof StateSchema
    reducer: Reducer
    removeAfterUnmount?: boolean
}

export type UseDynamicReducerProps = ReducerProps[]

export const useDynamicReducer = (reducers: UseDynamicReducerProps) => {
    const store = useAppStore()
    const dispatch = useAppDispatch()
    const state = store.getState()

    useEffect(() => {
        for (const reducer of reducers) {
            if (!state[reducer.key]) {
                store.reducerManager?.add(reducer.key, reducer.reducer)
                dispatch({ type: `@INIT ${reducer.key} form reducer` })
            }
        }

        return () => {
            for (const reducer of reducers) {
                if (reducer.removeAfterUnmount ?? true) {
                    store.reducerManager?.remove(reducer.key)
                    dispatch({ type: `@DESTROY ${reducer.key} form reducer` })
                }
            }
        }
    }, [])
}
