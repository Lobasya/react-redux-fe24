import {actionTypes} from './actionType';

const initState = {
    userList: [],
    blockedUsers: [],
};

export const usersReducer = (state=initState, action) => {
    const {type, payload} = action;

    switch (type) {
        case actionTypes.BLOCK_USER:
            const userList = [...state.userList];
            const index = userList.findIndex(user => user.id === payload.id);
            const blockedUsers = [...state.blockedUsers, userList[index]];
            userList.splice(index, 1);

            return {
                ...state,
                userList,
                blockedUsers,
            }
        case actionTypes.UNBLOCK_USER:
            const blockedUsersArr = [...state.blockedUsers];
            const indexOfBlockUser = blockedUsers
                                    .findIndex(user => user.id === payload.id);
            const userListArr = [...state.userList, blockedUsers[indexOfBlockUser]];
            blockedUsers.splice(indexOfBlockUser, 1);

            return {
                ...state,
                userList: userListArr,
                blockedUsers: blockedUsersArr,
            }
        default:
            return state;   
    }
}