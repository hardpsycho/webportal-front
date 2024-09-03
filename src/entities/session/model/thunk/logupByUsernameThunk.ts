import { createAsyncThunk } from '@reduxjs/toolkit'

import { LS_ACCESS_TOKEN } from '@shared/const'
import { ExtraArgs } from '@app/store'

interface LogupByUsernameProps {
    email: string
    password: string
    lastName: string
    firstName: string
}

const logupByUsername = createAsyncThunk<string, LogupByUsernameProps, ExtraArgs>(
    'session/logupByUsername',
    async (userData, thunkApi) => {
        try {
            const response = await thunkApi.extra.api.post<{ accessToken: string }>(
                '/auth/sign-up',
                userData
            )

            const token = response.data.accessToken

            if (token) {
                localStorage.setItem(LS_ACCESS_TOKEN, token)
                const splittedToken = token.split('.')
                const decodedPayload = JSON.parse(atob(splittedToken[1]))
                const id = decodedPayload.id as string
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
