import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LogupSchema } from '../types'
import { logupByUsername } from '@entities/session'

const initialState: LogupSchema = {
    username: '',
    password: '',
    lastName: '',
    firstName: '',
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
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload
        },
        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload
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
            state.lastName = ''
            state.firstName = ''
        })
    }
})

export const { actions: logupActions, reducer: logupReducer } = logupSlice
