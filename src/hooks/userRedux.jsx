import React from "react";

const userReducer = (state, action) => {
    return {...action}
    // switch (action.type) {
    //     case 'addMoney':
    //         state.money = action.money;
    //         return {...state};
    //     default:
    //         return state;
    // }
}

export default userReducer;