import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import './scss/base.scss';

import Header from './components/layout/header';
import Home from './pages/Home';
import Footer from "./components/layout/footer/Footer";
import Watches from "./pages/Watches";
import WatchInfo from './pages/WatchInfo';
import Brands from "./pages/Brands";
import Sell from "./pages/Sell";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App(props) {
    const plainPages = ['/login', '/signup'];
    return (
        <React.Fragment>
            {plainPages.includes(props.location.pathname) ? '' : <Header />}
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/(home|Home|HomePage)/" component={Home} />
                <Route exact path="/watches/:brandId?/:category?" component={Watches} />
                <Route exact path="/brands" component={Brands} />
                <Route exact path="/WatchInfo/:watchId" component={WatchInfo} />
                <Route exact path="/sell" component={Sell} />
            </Switch>
            {
                plainPages.includes(props.location.pathname) ? '' : <Footer />
            }
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
        </React.Fragment>
    );
}

export default withRouter(App);