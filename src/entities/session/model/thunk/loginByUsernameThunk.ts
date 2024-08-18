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
                userData
            )

            console.log('response', response)

            const token = response.data.accessToken

            if (token) {
                localStorage.setItem(LS_ACCESS_TOKEN, token)
                const splittedToken = token.split('.')
                const decodedPayload = JSON.parse(atob(splittedToken[1]))
                console.log('decodedPayload', decodedPayload)
                const id = decodedPayload.id as string
                console.log('id', id)
                return id
            }

            return thunkApi.rejectWithValue('login-error')
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue('login-error')
        }
    }
)

export { loginByUsername }
