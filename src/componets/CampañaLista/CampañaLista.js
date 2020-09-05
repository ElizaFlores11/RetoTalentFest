import React from 'react';
import Boton from '../Boton/Boton'


const CampañaLista = ()=> {
    return(
        <div>
            <h1>TU CAMPAÑA ESTA LISTA!</h1>
            <div>
                <p>Tu campaña estará lista a partir del día ..., Gracias por ser parte del Walmart!</p>
                <Boton>Listo</Boton>
                <Boton>Comprar otra campaña</Boton>
            </div>
        </div>
    )
}

export default CampañaLista