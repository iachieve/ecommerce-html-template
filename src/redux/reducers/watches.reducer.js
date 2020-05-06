import {SET_WATCHES_LIST} from '../types';

const watchesReducer = (state = {}, {type, payload})=>{
    Object.freeze(state);
    switch (type) {
        case SET_WATCHES_LIST:
            return Object.assign({}, state, payload);
        default:
            return state;
    }
};
export  default watchesReducer;