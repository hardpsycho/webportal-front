import { Article } from '.'

export interface ArticleSchema {
    isLoading: boolean
    error?: string
    data?: Article
}
