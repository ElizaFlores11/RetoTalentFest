import React from 'react';
import template from '../assets/duplicado.png'
import '../../styles/homeProveedor.scss'

const TiposdeCampaña = ()=> {
    return(
        <div>
            <img src={template}></img>
            <button className='yellow-btn'>Ver detalles</button>
            <button className='yellow-btn'>Ver detalles</button>
        </div>
    )
}

export default TiposdeCampaña