import { AxiosInstance } from 'axios'
import { Dispatch } from '@reduxjs/toolkit'

import { loginByUsername } from './loginByUsernameThunk'
import { StateSchema } from '@app/store'
import { api as instance } from '@shared/api/instance'

describe('loginByUsername test', () => {
    let dispatch: Dispatch
    let getState: () => StateSchema
    const api: AxiosInstance = instance

    beforeEach(() => {
        dispatch = jest.fn()
        getState = jest.fn()
    })

    it('loginByUsername success test', async () => {
        jest.spyOn(instance, 'post').mockImplementation(() => {
            return Promise.resolve({
                data: {
                    accessToken:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJhZG1pbkBnbWFpbC5ydSIsImlhdCI6MTcyNDc3OTQ2MCwiZXhwIjoxNzI0NzgwMDYwfQ.jCTG8hIVnOdTI9BVMcBzJq86AykMMRqhzeR3AQebc7Q'
                }
            })
        })

        const action = loginByUsername({ email: 'serg', password: 'pass' })
        const result = await action(dispatch, getState, { api })

        expect(result.meta.requestStatus).toBe('fulfilled')
        // в токене объект - { id: 7, email: 'admin@gmail.ru', iat: 1724779460, exp: 1724780060 }
        // возвращается id
        expect(result.payload).toBe(7)
    })

    it('loginByUsername wrong test', async () => {
        jest.spyOn(instance, 'post').mockImplementation(() => {
            return Promise.resolve({ status: 403 })
        })

        const action = loginByUsername({ email: 'serg', password: 'pass' })
        const result = await action(dispatch, getState, { api })

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
