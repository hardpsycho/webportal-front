import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { loginByUsername } from '../thunk/loginByUsernameThunk'
import { logupByUsername } from '../thunk/logupByUsernameThunk'
import { refreshSession } from '../thunk/refreshSessionThunk'
import { removeSession } from '../thunk/removeSessionThunk'
import { SessionSchema } from '../types/sessionSchema'

const initialState: SessionSchema = {
    id: null
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        removeSession: (state) => {
            state.id = null
        },
        setSession: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(removeSession.fulfilled, (state) => {
            state.id = null
        })

        builder.addCase(loginByUsername.fulfilled, (state, action: PayloadAction<string>) => {
            state.id = action.payload
        })

        builder.addCase(logupByUsername.fulfilled, (state, action: PayloadAction<string>) => {
            state.id = action.payload
        })

        builder.addCase(refreshSession.fulfilled, (state, action: PayloadAction<string>) => {
            state.id = action.payload
        })
    }
})

export const { actions: sessionActions, reducer: sessionReducer } = sessionSlice
