import * as actionTypes from './userData.actionTypes'

export const userSignUp = (value) => {
    return dispatch => {
        dispatch(
            saveInfo(value)
        )
    }
}
export const saveInfo = (value) => {
    return {
        type: actionTypes.SIGN_UP,
        value
    }
}