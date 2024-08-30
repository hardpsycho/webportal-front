import { screen } from '@testing-library/react'

import { renderWithProviders } from '@shared/libs/jest'
import { Sidebar } from './sidebar'

describe('Sidebar test', () => {
    it('Sidebar test exist', () => {
        renderWithProviders(<Sidebar />)
        const sidebar = screen.getByTestId('sidebar')
        expect(sidebar).toBeInTheDocument()
    })
})
