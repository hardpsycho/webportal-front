import { Theme } from '@shared/libs/theme'
import { globalDecorator } from '@shared/libs/storybook/globalDecorator'
import { themeDecorator } from '@shared/libs/storybook/themeDecorator'
import type { Preview } from '@storybook/react'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [globalDecorator, themeDecorator(Theme.LIGHT)]
}

export default preview
