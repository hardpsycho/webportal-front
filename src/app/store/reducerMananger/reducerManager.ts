import { combineReducers, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit'

import { StateSchema } from '../types/StateSchema'
import { SessionSchema } from '@entities/session'

interface CreateReducerManagerReturn {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: Reducer<StateSchema>
    add: (key: keyof StateSchema, reducer: Reducer) => void
    remove: (key: keyof StateSchema) => void
}

export type CreateReducerManager = (
    initialReducers: ReducersMapObject<StateSchema>
) => CreateReducerManagerReturn

const createReducerManager: CreateReducerManager = (initialReducers) => {
    // Create an object which maps keys to reducers
    const reducers = { ...initialReducers }
    // Create the initial combinedReducer
    let combinedReducer = combineReducers(reducers) as Reducer<
        { session: SessionSchema },
        UnknownAction,
        Partial<{ session: SessionSchema | undefined }>
    >

    // An array which is used to delete state keys when reducers are removed
    let keysToRemove: (keyof StateSchema)[] = []

    return {
        getReducerMap: () => reducers,

        // The root reducer function exposed by this object
        // This will be passed to the store
        reduce: (state: StateSchema | undefined, action: UnknownAction) => {
            if (state === undefined) {
                return combinedReducer({}, action)
            }

            // If any reducers have been removed, clean up their state first
            if (keysToRemove.length > 0) {
                state = { ...state }
                for (const key of keysToRemove) {
                    delete state[key]
                }
                keysToRemove = []
            }

            // Delegate to the combined reducer
            return combinedReducer(state, action)
        },

        // Adds a new reducer with the specified key
        add: (key: keyof StateSchema, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }

            // Add the reducer to the reducer mapping
            reducers[key] = reducer

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers)
        },

        // Removes a reducer with the specified key
        remove: (key: keyof StateSchema) => {
            if (!key || !reducers[key]) {
                return
            }

            // Remove it from the reducer mapping
            delete reducers[key]

            // Add the key to the list of keys to clean up
            keysToRemove.push(key)

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers)
        }
    }
}

export { createReducerManager }
