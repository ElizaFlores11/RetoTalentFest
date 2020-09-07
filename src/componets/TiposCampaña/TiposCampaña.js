import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'

import template from '../assets/duplicado.png'
import '../../styles/homeProveedor.scss'

const TiposdeCampaña = ()=> {
    const [tipo, setTipo] = useState('superBan')
    let history = useHistory()

    function handleClick() {

        history.push('/DetallesBanners/superBanner')
    }
    function handleClick1() {

        history.push('/DetallesBanners/banner')
    }
    return(
        <div className='tipos-container'>
            <h1 className='h1-tipos'>¿Dónde te gustaría publicitarte?</h1>
            <img src={template}></img>
            
                <button className='yellow-btn' id='superbanner-btn' onClick={handleClick}>Ver detalles</button>   
                <button className='yellow-btn'id='banner-btn' onClick={handleClick1}>Ver detalles</button>
        
        </div>
    )
}

export default TiposdeCampaña