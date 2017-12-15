import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Bin from './components/Bin'


export default (
    <Switch>
        {/* simulation 42F and 42G */}
        <Route exact path = '/' component={ Home }/>
        <Route path = '/bin/:id' component={ Bin }/>
        <Route path = '/create/:id'/>
    </Switch>
)
