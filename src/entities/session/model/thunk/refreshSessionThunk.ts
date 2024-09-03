import { createAsyncThunk } from '@reduxjs/toolkit'

import { LS_ACCESS_TOKEN } from '@shared/const'
import { ExtraArgs } from '@app/store'

const refreshSession = createAsyncThunk<string, unknown, ExtraArgs>(
    'session/refreshSession',
    async (_, thunkApi) => {
        try {
            const response = await thunkApi.extra.api.get<{ accessToken: string }>('/auth/refresh')

            const token = response.data.accessToken

            if (token) {
                localStorage.setItem(LS_ACCESS_TOKEN, token)
                const splittedToken = token.split('.')
                const decodedPayload = JSON.parse(atob(splittedToken[1]))
                const id = decodedPayload.id as string
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
