import { useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonVariant } from '@shared/ui/button'

interface LanguageSwitcherProps {
    className?: string
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = useCallback(() => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }, [i18n.language])

    return (
        <Button variant={ButtonVariant.GHOST} onClick={changeLanguage}>
            {t('language-abbreviation')}
        </Button>
    )
}

export { LanguageSwitcher }
