import { StateSchema } from '@app/store'
import { loginSlice } from '../../slice/loginSlice'

export const getLoginState = (state: StateSchema) => {
    const loginForm = state.loginForm

    if (loginForm) {
        return loginForm
    }

    return loginSlice.getInitialState()
}
