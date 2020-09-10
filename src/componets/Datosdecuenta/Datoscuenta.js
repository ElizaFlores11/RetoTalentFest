import React from 'react';
import { Input, Col,Row } from 'antd'
import iconCu from '../assets/pasos5.png'
import 'antd/dist/antd.css';
import '../../styles/aprobacion.scss'

const DatosCuenta = () =>{
    return(
        <div className='account-box'>  
          <div className='account-div-icon'>
            <img src={iconCu} className='icon-medium' id='iconCu'></img>
            <h3>DATOS DE CUENTA</h3>
          </div>
          <div className='container-input'>         
              <Input style={{ width: '350px', border: '#017DC3' }} size="large" placeholder="Número de tarjeta" /> <br /> <br /> <br />               
              <Input style={{ width: '350px', border: '#017DC3' }} size="large" placeholder="Vencimiento de tarjeta" /> <br /> <br /> <br /> 
              <Input style={{ width: '350px', border: '#017DC3' }} size="large" placeholder="Vencimiento de tarjeta" /> <br /> <br /> <br />  
              <Input style={{ width: '350px', border: '#017DC3' }} size="large" placeholder="Nombre del titular" /><br /> <br /> <br /> 
          </div> 
        </div>
    )
}
 
export default DatosCuenta