import * as types from "../constants/ActionTypes";
let initialState = false;   // close form

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CLOSE_FORM:
            return false;
        case types.OPEN_FORM:
            return true;
        default:
            return state;
    }
}

export default myReducer;