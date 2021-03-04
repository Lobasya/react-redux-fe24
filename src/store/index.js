import {createStore, combineReducers} from 'redux';
import { currentUserReducer } from './currentUser/reducer';
import { usersReducer } from './users/reducer';

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer
});

const store = createStore(rootReducer);


export default store;