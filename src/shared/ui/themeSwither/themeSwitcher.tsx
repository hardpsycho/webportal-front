import { useTheme } from '@shared/libs/theme'
import { clsx } from 'clsx';
import { type FC } from 'react'
import styles from './themeSwitcher.m.scss'
import DarkIcon from './assets/dark.svg'
import LightIcon from './assets/light.svg'
import { Theme } from '@shared/libs/theme/types';
import { Button, ButtonVariant } from '@shared/ui/button';

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant={ButtonVariant.GHOST}
            className={clsx(styles.themeSwitcher, className)}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <DarkIcon color='white' /> : <LightIcon  color='yellow' />}
        </Button>
    )
}

export { ThemeSwitcher }