import { StoryFn } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { ThemeProvider } from '@shared/libs/theme'
import '@shared/libs/i18n/storybook'
import '@app/styles/main.scss'

const globalDecorator = (Story: StoryFn) => {
    return (
        <ThemeProvider>
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        </ThemeProvider>
    )
}

export { globalDecorator }
