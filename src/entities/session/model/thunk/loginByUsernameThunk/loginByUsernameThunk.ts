import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { LS_ACCESS_TOKEN } from '@shared/const'

interface LoginByUsernameProps {
    email: string
    password: string
}

const loginByUsername = createAsyncThunk<string, LoginByUsernameProps, { rejectValue: string }>(
    'session/loginByUsername',
    async (userData, thunkApi) => {
        console.log('userData', userData)
        try {
            const response = await axios.post<{ accessToken: string }>(
                'http://localhost:5000/auth/sign-in',
                userData,
                {
                    withCredentials: true
                }
            )

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
