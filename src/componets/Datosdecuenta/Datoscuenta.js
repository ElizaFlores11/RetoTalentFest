import React from 'react';
import { Menu, } from 'antd';
import 'antd/dist/antd.css';

const datosCuenta = () =>{
    return(
        <div>
        <ul>Para finalizar el proceso de contratación, ingresa tus datos de cuenta para realizar el pago correspondiente</ul>
        <h3>DATOS DE CUENTA</h3>             
          <Input placeholder="Basic usage" title="Número de tarjeta" />       
          <Input placeholder="Basic usage" title="Vencimiento de tarjeta" />
          <Input placeholder="Basic usage" title="Vencimiento de tarjeta" />  
          <Input placeholder="Basic usage" title="Nombre del titular" />
        </div>
    )
}
;