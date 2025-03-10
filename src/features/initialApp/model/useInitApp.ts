import { useLayoutEffect } from 'react'

import { refreshSession } from '@entities/session'
import { LS_ACCESS_TOKEN } from '@shared/const'
import { useAppDispatch } from '@app/store'

const useInitApp = () => {
    const dispatch = useAppDispatch()
    const token = localStorage.getItem(LS_ACCESS_TOKEN)

    useLayoutEffect(() => {
        if (token) {
            dispatch(refreshSession({}))
        }
    }, [token])
}

export { useInitApp }
