import { memo, type FC } from 'react'
import { useParams } from 'react-router-dom'

import { ArticleComponent } from '@entities/article'

interface ArticleDetailPageProps {}

const ArticleDetailPage: FC<ArticleDetailPageProps> = () => {
    const params = useParams()

    if (!params.id) {
        return null
    }

    return (
        <div>
            <ArticleComponent id={params.id} />
        </div>
    )
}

export default memo(ArticleDetailPage)
