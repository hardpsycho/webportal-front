import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { LS_ACCESS_TOKEN } from '@shared/const'

const refreshSession = createAsyncThunk<string, unknown, { rejectValue: string }>(
    'session/refreshSession',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<{ accessToken: string }>(
                'http://localhost:5000/auth/refresh'
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

            return thunkApi.rejectWithValue('refresh-error')
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue('refresh-error')
        }
    }
)

export { refreshSession }
