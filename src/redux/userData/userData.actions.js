import * as actionTypes from './userData.actionTypes'

export const userSignUp = (value) => {
    return dispatch => {
        dispatch(saveInfo(value, actionTypes.SIGN_UP))
    }
}

export const userLogin = (value) => {
    return dispatch => {
        dispatch(saveInfo(value, actionTypes.LOGIN))
    }
}

export const saveInfo = (value, type) => {
    return {
        type: type,
        value
    }
}