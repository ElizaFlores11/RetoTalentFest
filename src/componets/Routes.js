import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from './Login/Login.js'; 
import IniciarSesion from './IniciarSesion/IniciarSesion.js';
import HomeProveedor from './HomeProveedor/HomeProveedor.js'; 
import HomeInterno from './HomeInterno/HomeInterno.js'; 
const Routes = () => {

    return (
        <Switch>
            <Route exact path="/HomeInterno">
                <HomeInterno />
            </Route>
            <Route exact path="/HomeProveedor">
                <HomeProveedor />
            </Route>
            <Route exact path="/IniciarSesion">
                <IniciarSesion />
            </Route>
            <Route exact path="/">
                <Login />
            </Route>
        </Switch>
    )
}

export default Routes; 