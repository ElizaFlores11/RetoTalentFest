import React from 'react';
import { useHistory } from 'react-router-dom'
import '/home/laboratoria158-am/Documentos/RetoTalentFest/src/styles/Aprobacio.scss'
import {Col, Button} from 'antd';
import {PlusOutlined } from '@ant-design/icons';
const Aprobacion = () =>{
    let history = useHistory()

    function handleClick() {

        history.push('/Completado')
    }
    return(
            
      
             <Col span={12} offset={6}>
                 
                 <div className="aporb">
            <h2>Listo</h2>
            <p>Tu campaña ha sido aprobada</p>
            <Button  style={{ background: '#337CD3' }} onClick={handleClick}>comprar</Button>
    <Button icon={ <PlusOutlined /> } style={{ background: '#FDBB2F' }}>Agregar espacio diponible</Button>
            </div>
            </Col>
    )
}

export default Aprobacion