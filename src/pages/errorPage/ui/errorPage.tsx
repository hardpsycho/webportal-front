import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './errorPage.m.scss'

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => {
    const { t } = useTranslation()

    return <div className={styles.errorPage}>{t('error-message')}</div>
}

export { ErrorPage }
