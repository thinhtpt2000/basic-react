import { createStore } from 'redux';

let initialState = {
    status: false,
    sort: {
        by: 'name',
        value: 1
    }
};

let myReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_STATUS') {
        state.status = !state.status;
    } else if (action.type === 'SORT') {
        state.sort = action.payload;
    }
    return state;
};

const store = createStore(myReducer);
console.log('DEFAULT: ', store.getState());

// Do toggle status
let actionStatus = {
    type: 'TOGGLE_STATUS'
}
store.dispatch(actionStatus);
console.log('TOGGLE_STATUS: ', store.getState());

// Do sort name Z->A
let actionSort = {
    type: 'SORT',
    payload: {
        by: 'name',
        value: -1
    }
};
store.dispatch(actionSort);
console.log('SORT: ', store.getState());