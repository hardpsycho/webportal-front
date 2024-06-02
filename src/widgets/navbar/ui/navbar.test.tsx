import { screen } from '@testing-library/react'

import { renderWithProviders } from '@shared/libs/jest'
import { Navbar } from './navbar'

describe('Sidebar test', () => {
    it('Sidebar test exist', () => {
        renderWithProviders(<Navbar />)
        const navbar = screen.getByTestId('navbar')
        expect(navbar).toBeInTheDocument()
    })
})
