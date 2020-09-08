import React, {useState} from 'react'
import { Switch, Route } from "react-router-dom";
import Login from './Login/Login.js'; 
import IniciarSesion from './IniciarSesion/IniciarSesion.js';
import HomeProveedor from './HomeProveedor/HomeProveedor.js'; 
import HomeInterno from './HomeInterno/HomeInterno.js'; 
import Uploadphoto from './uploadphoto/Uploadphoto.js';
import Detalles from './DetalleBanner/Detalles'
import infoUp from './infoupload/infoupload.js';
import DetalleBanner from './DetalleBanner/DetalleBanner.js';
//import SubirArchivos from './SubirArchivos/SubirArchivos.js'
const Routes = ({tipo}) => {

    
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
            <Route exact path="/">
                <Uploadphoto/>
            </Route>
            <Route exact path="/">
                <infoUp/>
            </Route>
            <Route exact path="/DetallesBanners/superBanner">
                <DetalleBanner sBanner/>
            </Route>
            <Route exact path="/DetallesBanners/banner">
                <DetalleBanner ban/>
            </Route>
          
        </Switch>
    )
}

export default Routes; 