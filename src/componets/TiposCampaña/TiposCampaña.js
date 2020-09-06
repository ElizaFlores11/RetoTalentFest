import React from 'react';
import { Link } from "react-router-dom";

import template from '../assets/duplicado.png'
import '../../styles/homeProveedor.scss'

const TiposdeCampaña = ()=> {
    return(
        <div className='tipos-container'>
            <h1 className='h1-tipos'>¿Dónde te gustaría publicitarte?</h1>
            <img src={template}></img>
            <Link to='/DetallesBanners'>
                <button className='yellow-btn' id='superbanner-btn'>Ver detalles</button>
            </Link>
            
            <button className='yellow-btn'id='banner-btn'>Ver detalles</button>
        </div>
    )
}

export default TiposdeCampaña