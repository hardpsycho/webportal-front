import { type ReactNode, type FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { getSessionState } from '@entities/session'

interface RequireAuthProps {
    children: ReactNode
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
    const { id } = useSelector(getSessionState)
    const location = useLocation()

    if (!id) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children
}

export { RequireAuth }
