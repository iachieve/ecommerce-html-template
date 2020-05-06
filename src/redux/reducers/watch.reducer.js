import { SET_WATCH } from '../types';

export default function watchReducer(state = {}, {type, payload}) {
    Object.freeze(state);
    switch (type) {
        case SET_WATCH:
            return Object.assign({}, state, payload);
        default:
            return state;
    }
};