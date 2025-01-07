import { useEffect, type FC } from 'react'
import { useParams } from 'react-router-dom'

import { FullProfile } from '@entities/profile/ui/fullProfile/fullProfile'
import { useAppDispatch } from '@app/store'
import { getProfile } from '@entities/profile'

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()

    console.log('id', id)

    useEffect(() => {
        dispatch(getProfile(id))
    }, [])

    return (
        <>
            <FullProfile fisrtName="Сергей" lastName="Орлов" />
        </>
    )
}

export default ProfilePage
