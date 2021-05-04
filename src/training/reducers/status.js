import * as types from './../constants/ActionTypes';

let initialState = false;

let myReducer = (state = initialState, action) => {
    if (action.type === types.TOGGLE_STATUS) {
        state = !state;
    }
    return state;
};

export default myReducer;