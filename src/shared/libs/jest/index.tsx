import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

import { ThemeProvider } from '../theme'
import { StateSchema, StoreProvider } from '@app/store'
import '@shared/libs/i18n/forTest'

export const renderWithProviders = (child: ReactNode, initialState?: StateSchema) => {
    return render(
        <StoreProvider initialState={initialState}>
            <ThemeProvider>
                <MemoryRouter>{child}</MemoryRouter>
            </ThemeProvider>
        </StoreProvider>
    )
}
