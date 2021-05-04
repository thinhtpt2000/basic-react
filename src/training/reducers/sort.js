import * as types from './../constants/ActionTypes';

let initialState = {
    by: 'name',
    value: 1
};

let myReducer = (state = initialState, action) => {
    if (action.type === types.SORT) {
        state = action.payload;
    }
    return state;
};

export default myReducer;