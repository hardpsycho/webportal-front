import { useEffect, type FC } from 'react'

import { useDynamicReducer } from '@shared/libs/useDynamicReducer'
import { UseDynamicReducerProps } from '@shared/libs/useDynamicReducer/useDynamicReducer'
import { articleReducer } from '@entities/article/model/slice/articleSlice'
import { useAppDispatch } from '@app/store'
import { getArticleById } from '@entities/article/model/thunks/getArticleById/getArticleById'

interface ArticleComponentProps {
    id: string
}

const dynamicReducers: UseDynamicReducerProps = [
    { key: 'article', reducer: articleReducer, removeAfterUnmount: true }
]

const ArticleComponent: FC<ArticleComponentProps> = ({ id }) => {
    useDynamicReducer(dynamicReducers)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getArticleById(id))
    })

    return <div></div>
}

export { ArticleComponent }
