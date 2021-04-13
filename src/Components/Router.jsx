import React from 'react';
import {Switch, Route} from "react-router-dom";
import FirstPage from "./FirstPage";
import Search from './Search'

const Router = () => {
    return(
        <div>
            <Switch>
                <Route exact  path='/' component={FirstPage}/>
                <Route path='/search' component={Search}/>
            </Switch>
        </div>
    );
};

export default Router;