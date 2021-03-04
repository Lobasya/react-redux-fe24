import { act } from 'react-dom/test-utils';
import {actionTypes} from './actionType';

const initState = {
    isAuth: false,
    token: '',
    userData: null,
};

export const currentUserReducer = (state=initState, action) => {
    const {type, payload} = action;

    switch (type) {
        case actionTypes.LOGGED_IN:
            return {
                ...state,
                isAuth: true,
                token: payload.access_token,
            }
        case actionTypes.LOGGED_OUT:
            return {
                userData: null,
                isAuth: false,
                token: '',
            }
        case actionTypes.SET_CURREN_USER:
            return {
                ...state,
                userData: payload.user,
            }
        default:
            return state;   
    }
}