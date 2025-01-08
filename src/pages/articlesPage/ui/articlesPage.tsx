import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface ArticlesPageProps {}

const ArticlesPage: FC<ArticlesPageProps> = () => {
    const { t } = useTranslation()

    return <div>{t('article_list')}</div>
}

export default memo(ArticlesPage)
