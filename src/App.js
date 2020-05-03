import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './scss/base.scss';

import Header from './components/layout/header';
import Home from './pages/Home';
import Footer from "./components/layout/footer/Footer";
import Watches from "./pages/Watches";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/watches" component={Watches}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
