import * as types from './../constants/ActionTypes';

export const status = () => {
    return {
        type: types.TOGGLE_STATUS
    }
}

export const sort = (payload) => {
    return {
        type: types.SORT,
        payload
    }
}