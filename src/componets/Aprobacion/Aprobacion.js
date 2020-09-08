import React from 'react';
import { useHistory } from 'react-router-dom'

const Aprobacion = () =>{
    let history = useHistory()

    function handleClick() {

        history.push('/Completado')
    }
    return(
        <div>
            <p>Tu campaña ha sido aprobada</p>
            <button onClick={handleClick}>comprar</button>
        </div>
    )
}

export default Aprobacion