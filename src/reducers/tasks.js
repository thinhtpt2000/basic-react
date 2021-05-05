import * as types from "./../constants/ActionTypes";
let initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const randomId = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

const generateId = () => randomId() + '-' + randomId() + '-' + randomId() + '-' + randomId();

const mapPayloadToTask = (payload) => {
    return {
        id: payload.id === "" ? generateId() : payload.id,
        name: payload.txtName,
        status: payload.sltStatus === "1"
    }
}

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return [...state];
        case types.ADD_TASK:
            let task = mapPayloadToTask(action.payload);
            state.push(task);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]; 
        default:
            return [...state];
    }
}

export default myReducer;