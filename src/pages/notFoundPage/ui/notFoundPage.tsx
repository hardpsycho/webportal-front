import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './notFoundPage.m.scss'

interface NotFoundPageProps {}

const NotFoundPage: FC<NotFoundPageProps> = () => {
    const { t } = useTranslation()

    return (
        <div className={styles.notFoundPage}>
            <p>{t('not-found-page')}</p>
        </div>
    )
}

export { NotFoundPage }
