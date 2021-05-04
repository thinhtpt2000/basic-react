import { createStore } from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);
console.log('DEFAULT: ', store.getState());

// Do toggle status
store.dispatch(status());
console.log('TOGGLE_STATUS: ', store.getState());

// Do sort name Z->A
store.dispatch(sort({
    by: 'name',
    value: -1
}));
console.log('SORT: ', store.getState());