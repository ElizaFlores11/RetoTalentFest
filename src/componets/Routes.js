import React from 'react'
import { Switch, Route } from "react-router-dom";
import Index from './Index/Index.js'; 

const Routes = () => {

    return (
        <Switch>
        <Route exact path="/">
                <Index />
            </Route>
        </Switch>
    )
}

export default Routes; 