import { StateSchema } from '@app/store'
import { logupSlice } from '../../slice/logupSlice'

export const getLogupState = (state: StateSchema) => {
    const logupForm = state.logupForm

    if (logupForm) {
        return logupForm
    }

    return logupSlice.getInitialState()
}
