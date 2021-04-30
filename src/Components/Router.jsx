import React, {useState} from 'react';
import {Switch, Route} from "react-router-dom";
import FirstPage from "./FirstPage";
import Search from './Search'
import Person from "./People/Person";
import PersonDetails from "./People/PersonDetails";


const Router = () => {
    const [personDetails, setPersonDetails] = useState('')
    return(
        <div>
            <Switch>
                <Route exact  path='/' component={FirstPage}/>
                <Route path='/search' component={Search}/>
                <Route exact path='/person' component={Person}/>
                <Route path='/person/:id' component={PersonDetails}/>
            </Switch>
        </div>
    );
};

export default Router;