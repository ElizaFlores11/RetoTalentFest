import {db} from '../../firebase/configFirebase';
import React, { useState, Fragment } from "react";

const SuibirDatos =({datos,setDatos}) => {
    const error = useState (false)
    const {titular, numtarj, vencimiento, tipo, banco} = datos

        const updateStateDatos =(e) => {
            setDatos({
                ...datos,
                [e.target.name]:e.target.value
            });
        }
        const formValidation = () => {
            if (titular === ""){
               setError(true)
                return
            }
            setError(false)
            
            setDatos({
                titular:"",
                numtarj:0,
                vencimiento:0,
                tipo:"",
                banco:""

            })
        }
        return(
            <div>
            <ul>Para finalizar el proceso de contratación, ingresa tus datos de cuenta para realizar el pago correspondiente</ul>
            <h3>DATOS DE CUENTA</h3>
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
  