import { createSlice } from '@reduxjs/toolkit'

import { ArticleSchema } from '../types/articleSchema'
import { getArticleById } from '../thunks/getArticleById/getArticleById'

const initialState: ArticleSchema = {
    isLoading: false
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getArticleById.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })

        builder.addCase(getArticleById.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
        })

        builder.addCase(getArticleById.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false
        })
    }
})

export const { actions: articleActions, reducer: articleReducer } = articleSlice
