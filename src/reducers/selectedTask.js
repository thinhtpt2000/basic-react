import * as types from "../constants/ActionTypes";

let initialState = {
    id: "",
    txtName: "",
    sltStatus: "1"
};

const mapPayloadToFormTask = (payload) => {
    return {
        id: payload.id,
        txtName: payload.name,
        sltStatus: payload.status ? "1" : "0"
    };
}

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SELECT_TASK:
            return mapPayloadToFormTask(action.payload);
        case types.UPDATE_FORM:
            return action.payload;
        case types.CLEAR_FORM:
            return initialState;
        default:
            return state;
    }
}

export default myReducer;