import { renderWithProviders } from "@shared/libs/jest"
import { screen } from "@testing-library/react"
import { Navbar } from "./navbar"

describe('Sidebar test', () => {
    it('Sidebar test exist', () => {
        renderWithProviders(<Navbar />)
        screen.debug()
        const navbar = screen.getByTestId('navbar')
        expect(navbar).toBeInTheDocument()
    })
})
