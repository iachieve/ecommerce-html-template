import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/root.reducer";
import thunk from "redux-thunk";



const middlewares = [thunk];

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

if (process.env.NODE_ENV !== "production") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

const configureStore = (preloadedState = {}) =>
    createStore(rootReducer,
        preloadedState,

   composeEnhancers(applyMiddleware(...middlewares))

    );

export default configureStore;
