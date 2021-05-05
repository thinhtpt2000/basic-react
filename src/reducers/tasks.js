import * as types from "./../constants/ActionTypes";
let initialState = JSON.parse(localStorage.getItem('tasks')) || [];

let myReducer = (state = initialState, action) => {
    switch (action) {
        case types.LIST_ALL:
            return state;
        default:
            return state;
    }
}

export default myReducer;