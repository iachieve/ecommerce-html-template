import { combineReducers } from 'redux';
import entitiesReducer from "./entities.reducer";

const rootReducer = combineReducers({
    entities: entitiesReducer
});

export default  rootReducer;