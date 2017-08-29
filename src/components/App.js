import React, {Component} from 'react';
import './App.css';
import Header from './common/Header';
import {Route} from 'react-router-dom';
import EventsPage from "./events/EventsPage";
import Home from "./home/Home";
import {withRouter} from "react-router-dom";

class App extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {

        }
    }

    render() {
        return (
            <div className="">
                <Header />

                <div className="container">
                    <Route exact path="/" component={Home}/>
                    <Route path="/events" component={EventsPage}/>
                </div>
            </div>
        );
    }
}

export default withRouter(App);
