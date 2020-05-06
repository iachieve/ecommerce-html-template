import { combineReducers } from 'redux';
import watchesReducer from "./watches.reducer";
import watchReducer from './watch.reducer';

const entitiesReducer = combineReducers({
    watches: watchesReducer,
    watch: watchReducer
});

export default  entitiesReducer;