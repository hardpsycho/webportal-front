import { createAsyncThunk } from '@reduxjs/toolkit'

import { LS_ACCESS_TOKEN } from '@shared/const'
import { ExtraArgs } from '@app/store'

interface LoginByUsernameProps {
    email: string
    password: string
}

const loginByUsername = createAsyncThunk<string, LoginByUsernameProps, ExtraArgs>(
    'session/loginByUsername',
    async (userData, thunkApi) => {
        try {
            const response = await thunkApi.extra.api.post('/auth/sign-in', userData)

            const token = response.data.accessToken

            if (token) {
                localStorage.setItem(LS_ACCESS_TOKEN, token)
                const splittedToken = token.split('.')
                const decodedPayload = JSON.parse(atob(splittedToken[1]))
                const id = decodedPayload.id as string
                return id
            }

            return thunkApi.rejectWithValue('login-error')
        } catch (error) {
            console.log('error', error)
            return thunkApi.rejectWithValue('login-error')
        }
    }
)

export { loginByUsername }
