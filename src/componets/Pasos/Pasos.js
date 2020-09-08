import React from 'react';
import pasos from '../assets/pasos.png'
const Pasos = ()=> {
    return(
        <div className='pasos-container'>
            <h1 className='h1-welcome'>Bienvenido</h1>
            <p className='text' >Como comprar tu campaña publicitaria</p>
            <img src={pasos}></img>
        </div>
    )
}
export default Pasos