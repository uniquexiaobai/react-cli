import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home.js';
// import About from './about.js';

const About = lazy(() => import('./about'));

const AppRouter = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home} />

            <Suspense fallback={<div>Loading ...</div>}>
                <Route exact path="/about" component={About} />
            </Suspense>
        </div>
    </Router>
);

export default AppRouter;
