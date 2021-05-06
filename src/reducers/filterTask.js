import * as types from "../constants/ActionTypes";

let initialState = {
    name: "",
    status: 2
};

const mapPayloadToFilter = (payload) => {
    return {
        name: payload.filterName.toLowerCase(),
        status: parseInt(payload.filterStatus)
    }
};

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TASK:
            return mapPayloadToFilter(action.payload);
        default:
            return state;
    }
};

export default myReducer;