import React, {useState} from 'react';
import pasos from '../assets/pasos5.png'
import { useHistory } from 'react-router-dom'
import { Modal, Button } from 'antd';

const CampañaLista = ()=> {
    const [state, setState] =  useState({visible: false})
    //  state = { visible: false };
    let history = useHistory()
    function regresar() {

        
    }
    const showModal = () => {
        setState({
        visible: true,
        });
    };
    const handleHome = e => {
        //console.log(e);
        setState({
        visible: false,
        });
        history.push('/HomeProveedor')
    };
    const handleDetalles = e => {
        //console.log(e);
        setState({
        visible: false,
        });
        history.push('/DetallesBaamer')
    };
    
    return(
        <div>
        <Button type="primary" onClick={showModal}>
            Open Modal
        </Button>
       <Modal
         visible={state.visible}
            onOk={handleHome}
            onCancel={handleDetalles}
            footer={[
                <Button id='btnAgregar' value='Agregar' enter key="submit" type="primary" onClick={handleHome}/>
              ]}
            >
         <img src={pasos} alt="Completado" style={{width: '100px'}} /> 
         <h3>Listo</h3>
        <p>Tu campaña esta lista para el día 13 de septiembre 2020</p>
        <p>Gracias por ser parte de Walmart</p>
        <button className='blue-btn' onClick={handleHome}>Listo</button>   
        <button className='yellow-btn' onClick={handleDetalles}>+ Agregar espacios Disponibles</button>
       </Modal>
        </div>
    )
}

export default CampañaLista