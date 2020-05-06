import * as watchesApiUtil from '../utils/watches.util';
import {SET_WATCH, SET_WATCHES_LIST} from '../types';

const receiveWatchesList = payload => {
    return {
        type: SET_WATCHES_LIST,
        payload
    }
};

const receiveWatch = payload => {
    return {
        type: SET_WATCH,
        payload
    }
};

export const fetchWatchesListAction = () => dispatch => {
    let watchesData = watchesApiUtil.fetchAllWatches();
    dispatch(receiveWatchesList(watchesData));
};

export const fetchWatchAction = id => dispatch => {
    let watchesData = watchesApiUtil.fetchAllWatches();

    let watch = undefined;
    for(let i = 0; i < watchesData.length; i++){
        const currWatch = watchesData[i];
        if(currWatch.id == id){
            watch = currWatch;
            break;
        }
    }
    dispatch(receiveWatch(watch));
};