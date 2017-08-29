import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Link, withRouter} from "react-router-dom";

const Header = ({location}) => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Events Calendar</Link>
                </Navbar.Brand>
            </Navbar.Header>

            <ul className="nav navbar-nav">
                <li role="presentation" className={location.pathname === '/' && 'active'}><Link to="/">Home</Link></li>
                <li role="presentation" className={location.pathname === '/events' && 'active'}><Link to="/events">Events</Link></li>
            </ul>
        </Navbar>
    )
};

export default withRouter(Header);
