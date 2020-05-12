import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import {HashRouter} from "react-router-dom";

const store = configureStore(undefined);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>

        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);