import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { clsx } from 'clsx'

import { Button } from '@shared/ui/button'
import { Text } from '@shared/ui/text'
import styles from './fullProfile.m.scss'

interface FullProfileProps {
    fisrtName: string
    lastName: string
    className?: string
}

const FullProfile: FC<FullProfileProps> = ({ fisrtName, lastName, className }) => {
    const { t } = useTranslation()
    return (
        <div className={clsx(className, styles.fillProfile)}>
            <header className={clsx(styles.header)}>
                <Text title={t('profile-page-link')} />
                <Button>Редактировать</Button>
            </header>
            <main className={clsx(styles.main)}>
                <Text text={fisrtName} />
                <Text text={lastName} />
            </main>
        </div>
    )
}

export { FullProfile }
