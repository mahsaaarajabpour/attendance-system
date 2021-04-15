import * as actionTypes from './tasks.actionTypes'

export const addTask = (value) => {
    return dispatch => {
        dispatch(
            saveTask(value)
        )
    }
}
export const saveTask = (value) => {
    return {
        type: actionTypes.ADD_TASK,
        value
    }
}