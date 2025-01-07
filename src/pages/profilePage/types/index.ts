import { type ProfileData } from '@entities/profile'

export interface ProfileSchema {
    profile: ProfileData
    error?: string
    isLoading: boolean
}
