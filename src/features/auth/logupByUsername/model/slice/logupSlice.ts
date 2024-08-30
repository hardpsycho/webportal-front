import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LogupSchema } from '../types'
import { logupByUsername } from '@entities/session'

const initialState: LogupSchema = {
    username: '',
    password: '',
    isLoading: false
}

export const logupSlice = createSlice({
    name: 'logup',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logupByUsername.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        builder.addCase(logupByUsername.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        builder.addCase(logupByUsername.fulfilled, (state) => {
            state.isLoading = false
            state.password = ''
            state.username = ''
        })
    }
})

export const { actions: logupActions, reducer: logupReducer } = logupSlice
