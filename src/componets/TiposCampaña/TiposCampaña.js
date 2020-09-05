import React from 'react';
import Boton from '../Boton/Boton'
import template from '../assets/duplicado.jpg'

const TiposdeCampaña = ()=> {
    return(
        <div>
            <img src={template}></img>
            <Boton>Ver detalles</Boton>
            <Boton>Ver detalles</Boton>
        </div>
    )
}

export default TiposdeCampaña