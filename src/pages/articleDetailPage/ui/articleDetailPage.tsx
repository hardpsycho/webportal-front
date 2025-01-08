import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface ArticleDetailPageProps {}

const ArticleDetailPage: FC<ArticleDetailPageProps> = () => {
    const { t } = useTranslation('article')
    return <div>{t('article')}</div>
}

export default memo(ArticleDetailPage)
