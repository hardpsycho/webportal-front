import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProfileSchema } from './../../types/index'
import { getProfile, ProfileData } from '@entities/profile'

const guestProfile: ProfileData = {
    firstName: 'Гость',
    lastName: '',
    age: null
}

const initialState: ProfileSchema = {
    profile: guestProfile,
    error: undefined,
    isLoading: false
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addProfile: (state, action: PayloadAction<ProfileData>) => {
            state.profile = action.payload
        },
        addError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProfile.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })

        builder.addCase(getProfile.rejected, (state, action) => {
            state.error = action.payload
        })

        builder.addCase(getProfile.fulfilled, (state, action: PayloadAction<ProfileData>) => {
            state.profile = action.payload
        })

        builder.addMatcher(getProfile.settled, (state) => {
            state.isLoading = false
        })
    }
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
