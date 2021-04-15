import {combineReducers} from 'redux';
import userDataReducer from './userData/userData.reducer';
import userTasksReducer from './userTasks/tasks.reducer';

const rootReducer = combineReducers({
    userData: userDataReducer,
    userTasks : userTasksReducer,
});

export default rootReducer;