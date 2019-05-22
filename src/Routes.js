import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './container/Home';
import Other from './container/Other';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/other" component={Other} />
        </div>
    </Router>
);

export default Routes;
