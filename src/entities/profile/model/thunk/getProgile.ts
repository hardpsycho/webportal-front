import { createAsyncThunk } from '@reduxjs/toolkit'

import { ExtraArgs } from '@app/store'
import { ProfileData } from '../types'

const getProfile = createAsyncThunk<ProfileData, string | undefined, ExtraArgs>(
    'profile/getProfile',
    async (id, thunkApi) => {
        id = id ?? ''
        try {
            const {
                data: { profile }
            } = await thunkApi.extra.api.get<{ profile: ProfileData }>(
                `/profile?${id ? `id=${id}` : ''}`
            )

            if (profile) {
                return profile
            }

            return thunkApi.rejectWithValue('profile-error')
        } catch (error) {
            return thunkApi.rejectWithValue('profile-error')
        }
    }
)

export { getProfile }
