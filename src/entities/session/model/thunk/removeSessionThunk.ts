import { createAsyncThunk } from '@reduxjs/toolkit'

import { LS_ACCESS_TOKEN } from '@shared/const'
import { ExtraArgs } from '@app/store'

const removeSession = createAsyncThunk<boolean, unknown, ExtraArgs>(
    'session/removeSession',
    async (_, thunkApi) => {
        try {
            await thunkApi.extra.api.post<{ accessToken: string }>('/auth/sign-out')
        } catch (error) {
            console.log(error)
        }
        localStorage.removeItem(LS_ACCESS_TOKEN)
        return true
    }
)

export { removeSession }
