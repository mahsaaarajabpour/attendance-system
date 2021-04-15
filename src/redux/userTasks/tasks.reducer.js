import * as actionTypes from './tasks.actionTypes'

const initialState = {
    tasks: [],
}
const userTasksReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat(action.value)
            }
    }
    return state
}
export default userTasksReducer;