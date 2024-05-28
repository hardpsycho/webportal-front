import { StoryFn } from '@storybook/react'
import { clsx } from 'clsx'

import { Theme } from '@shared/libs/theme'
import '@shared/libs/i18n'
import '@app/styles/main.scss'
import './storybookRoot.scss'

const themeDecorator = (theme: Theme) => {
    const _themeDecorator = (Story: StoryFn) => {
        return (
            <div className={clsx(theme, 'hp-sb-root')}>
                <Story />
            </div>
        )
    }

    return _themeDecorator
}

export { themeDecorator }
