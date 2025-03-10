import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoginSchema } from '../types/loginSchema'
import { loginByUsername } from '@entities/session'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'login',
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
        builder.addCase(loginByUsername.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        builder.addCase(loginByUsername.fulfilled, (state) => {
            state.isLoading = false
            state.password = ''
            state.username = ''
        })
    }
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
