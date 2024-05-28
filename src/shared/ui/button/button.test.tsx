import { Button } from "./button"
import {render, screen} from '@testing-library/react'

describe('Button test', () => {
    test('Button test children text', () => {
        render(<Button>Текст122</Button>)
        const text = screen.getByText('Текст122')
        expect(text).toBeInTheDocument()
    })
})