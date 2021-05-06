import * as types from "./../constants/ActionTypes";

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        payload: task
    }
}

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        payload: id
    }
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        payload: id
    }
}

export const updateTask = (task) => {
    return {
        type: types.UPDATE_TASK,
        payload: task
    }
}

export const selectTask = (task) => {
    return {
        type: types.SELECT_TASK,
        payload: task
    }
}

export const clearForm = () => {
    return {
        type: types.CLEAR_FORM
    }
}

export const newForm = () => {
    return {
        type: types.NEW_FORM
    }
}

export const filterTask = (filters) => {
    return {
        type: types.FILTER_TASK,
        payload: filters
    }
}

export const searchTask = (keyword) => {
    return {
        type: types.SEARCH_TASK,
        payload: keyword
    }
}

export const sortTask = (sort) => {
    return {
        type: types.SORT_TASK,
        payload: sort
    }
}