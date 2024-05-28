import { render, screen } from "@testing-library/react"
import { Sidebar } from "./sidebar"

describe('Sidebar test', () => {
    it('Sidebar test exist', () => {
        render(<Sidebar />)
        const sidebar = screen.getByTestId('sidebar')
        expect(sidebar).toBeInTheDocument()
    })
})
