import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { LS_ACCESS_TOKEN } from '@shared/const'

interface LogupByUsernameProps {
    email: string
    password: string
    lastName: string
    firstName: string
}

const logupByUsername = createAsyncThunk<string, LogupByUsernameProps, { rejectValue: string }>(
    'session/logupByUsername',
    async (userData, thunkApi) => {
        console.log('userData', userData)
        try {
            const response = await axios.post<{ accessToken: string }>(
                'http://localhost:5000/auth/sign-up',
                userData,
                {
                    withCredentials: true
                }
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

            return thunkApi.rejectWithValue('logup-error')
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue('logup-error')
        }
    }
)

export { logupByUsername }
