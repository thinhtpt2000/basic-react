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

const findIndex = (tasks, id) => {
    let index = -1;
    (tasks || []).forEach((task, idx) => {
        if (task.id === id) {
            index = idx;
            return;
        }
    });
    return index;
}

let myReducer = (state = initialState, action) => {
    let index = -1;
    let task = null;
    switch (action.type) {
        case types.LIST_ALL:
            return [...state];
        case types.ADD_TASK:
            task = mapPayloadToTask(action.payload);
            state.push(task);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS:
            index = findIndex(state, action.payload);
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                };
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];
        case types.DELETE_TASK:
            index = findIndex(state, action.payload);
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];
        default:
            return [...state];
    }
}

export default myReducer;