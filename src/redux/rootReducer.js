import {combineReducers} from 'redux';
import userDataReducer from './UserData/userData.reducer';

const rootReducer = combineReducers({
    userData: userDataReducer,
});

export default rootReducer;