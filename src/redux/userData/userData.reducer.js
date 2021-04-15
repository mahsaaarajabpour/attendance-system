import * as actionTypes from './userData.actionTypes'

const initialState = {
    info: [],
    userLoginInfo: []
}

const userDataReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.SIGN_UP:
            return {
                ...state,
                info: state.info.concat(action.value)
            }
        case actionTypes.LOGIN:
            return {
                ...state,
                userLoginInfo: action.value
            }
    }
    return state
}
export default userDataReducer;