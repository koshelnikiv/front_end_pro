import { types } from './actions';

const initialState = {
    todos: [],
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TODOS:
            return { ...state, todos: action.payload };
        default:
            return state;
    }
};
