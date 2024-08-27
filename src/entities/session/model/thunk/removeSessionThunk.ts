import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { LS_ACCESS_TOKEN } from '@shared/const'

const removeSession = createAsyncThunk<boolean, unknown, { rejectValue: string }>(
    'session/removeSession',
    async () => {
        try {
            await axios.post<{ accessToken: string }>(
                'http://localhost:5000/auth/sign-out',
                {},
                {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(LS_ACCESS_TOKEN)}`
                    }
                }
            )
        } catch (error) {
            console.log(error)
        }
        localStorage.removeItem(LS_ACCESS_TOKEN)
        return true
    }
)

export { removeSession }
