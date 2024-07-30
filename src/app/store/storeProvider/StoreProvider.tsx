import { ReactNode, type FC } from 'react'
import { Provider } from 'react-redux'

import { configureCustomStore } from '../store/store'
import { StateSchema } from '../types/StateSchema'

interface StoreProviderProps {
    children: ReactNode
    initialState?: Partial<StateSchema>
}

const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = configureCustomStore(initialState)

    return <Provider store={store}>{children}</Provider>
}

export { StoreProvider }
