import React from 'react';
import { Menu, } from 'antd';
import 'antd/dist/antd.css';

const datosCuenta = () =>{
    return(
        <div>
        <Menu>
        <Menu.ItemGroup title="Banco">
      <Menu.Item>Banorte</Menu.Item>
      <Menu.Item>Banamex</Menu.Item>
    </Menu.ItemGroup>
    </Menu>
    <br></br>
    <Menu>
        <Menu.ItemGroup title="Tipo de tarjeta">
      <Menu.Item>Crédito</Menu.Item>
      <Menu.Item>Débito</Menu.Item>
    </Menu.ItemGroup>
    </Menu>
    <br></br>
    <Input placeholder="Basic usage" title="Número de tarjeta" />
    <br></br>
    <Input placeholder="Basic usage" title="Vencimiento de tarjeta" />
    <br></br>
    <Input placeholder="Basic usage" title="Nombre del titular" />
    </div>
    )
}
;