import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1>Event's Calendar !</h1>
                <p>This is a React application to manage your events in a simple way. What are u waiting for?</p>
                <p><Link className="btn btn-primary" to="/events">Get started</Link></p>
            </Jumbotron>
        </div>
    );
};

export default Home;