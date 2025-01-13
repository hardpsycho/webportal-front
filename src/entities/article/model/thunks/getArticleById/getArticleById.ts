import { createAsyncThunk } from '@reduxjs/toolkit'

import { ExtraArgs } from '@app/store'
import { Article } from '../../types'

const getArticleById = createAsyncThunk<Article, string, ExtraArgs>(
    'article/getArticleById',
    async (id, thunkApi) => {
        try {
            const response = await thunkApi.extra.api.get<Article>(`/article/${id}`)

            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue('article-error')
        }
    }
)

export { getArticleById }
