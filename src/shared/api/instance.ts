import axios from 'axios'

import { LS_ACCESS_TOKEN } from '@shared/const'

const api = axios.create({
    baseURL: process.env.DEV_API,
    withCredentials: true,
    headers: {
        Authorization: `Bearer null`
    }
})

// Add a request interceptor to add the JWT token to the authorization header
api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem(LS_ACCESS_TOKEN)
        config.headers.Authorization = `Bearer ${accessToken}`
        return config
    },
    (error) => Promise.reject(error)
)

let canRequest = true
// Add a response interceptor to refresh the JWT token if it's expired
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config
        // If the error is a 401 and we have a refresh token, refresh the JWT token
        if (error.response.status === 401 && canRequest) {
            canRequest = false
            const response = await api.get('auth/refresh')
            localStorage.setItem(LS_ACCESS_TOKEN, response.data.accessToken)

            // Re-run the original request that was intercepted
            originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`
            api.request(originalRequest)
                .then((response) => {
                    canRequest = true
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        // Return the original error if we can't handle it
        return Promise.reject(error)
    }
)

export { api }
