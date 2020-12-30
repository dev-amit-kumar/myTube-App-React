import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import TopNavBar from './TopNavBar';
import SideNav from './SideNavBar';
import Home from '../container/Home'
import Footer from './Footer';

const Routing = () => {
    return(
        <BrowserRouter>
            <TopNavBar/>
            <div className="row">
                <div className="col-md-2">
                    <SideNav/>
                </div>
                <div className="col-md-10">
                    <Route exact path="/" component={Home}/>
                </div>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;