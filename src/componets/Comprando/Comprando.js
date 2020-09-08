import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom'
import {db} from '../../firebase/configFirebase';
import Calendario from '../Calendario/Calendario'
import SubirArchivos from '../SubirArchivos/SubirArchivos'
import MenuProveedor from '../MenuProveedor/MenuProveedor'
import { Row, Col, Layout, Calendar } from 'antd';
const { Header, Content } = Layout;

const Comprando= ()=> {
    let history = useHistory()

    function handleClick() {

        history.push('/Aprobacion');
        db.collection('banner').add({
            from: getInitialState.from,
            to: getInitialState.to
        }).then(()=>{
            console.log('tus fechas han sido agendadas')
        }) .catch((error) => {
            console.error("Error al subir tus fechas", error);
        });
    }
    const [getInitialState, setGetInitialState] = useState({
        from: undefined,
        to: undefined
      });



    return(
        <>
            <Layout>
                <Header>
                    <MenuProveedor/>
                </Header>
                <Content>
                    <Calendario getInitialState={getInitialState} setGetInitialState={setGetInitialState}/>
                    <SubirArchivos />
                    <button onClick={handleClick}>Enviar</button>
                    <button>Cancelar</button>
                </Content>
            </Layout>
        </>
    )
}

export default Comprando