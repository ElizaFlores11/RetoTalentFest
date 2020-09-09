import React from 'react';
import { useHistory } from 'react-router-dom'
import '/home/laboratoria158-am/Documentos/RetoTalentFest/src/styles/Aprobacio.scss'
import {Col} from 'antd';

const Aprobacion = () =>{
    let history = useHistory()

    function handleClick() {

        history.push('/Completado')
    }
    return(
        
             <Col span={12} offset={6}>
                 <div className="aporb">
            <p>Tu campaña ha sido aprobada</p>
            <button  align=" center" onClick={handleClick}>comprar</button>
            </div>
            </Col>
    )
}

export default Aprobacion