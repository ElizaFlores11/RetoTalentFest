import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom'
import {db} from '../../firebase/configFirebase';
import Calendario from '../Calendario/Calendario'
import SubirArchivos from '../SubirArchivos/SubirArchivos'
import MenuProveedor from '../MenuProveedor/MenuProveedor'
import { Row, Col, Layout, Calendar } from 'antd';
const { Header, Content } = Layout;

const Comprando= ({superBanner, sBannnerCentral, banner, bannerDpto})=> {

    let history = useHistory()

    function handleClick() {

        if(superBanner){
            history.push('/Aprobacion');
            db.collection('superBanner').add({
                from: getInitialState.from,
                to: getInitialState.to
            }).then(()=>{
                console.log('tus fechas han sido agendadas')
            }) .catch((error) => {
                console.error("Error al subir tus fechas", error);
            });
        }       
         else if (sBannnerCentral){
            history.push('/Aprobacion');
            db.collection('superBannerDpto').add({
                from: getInitialState.from,
                to: getInitialState.to
            }).then(()=>{
                console.log('tus fechas han sido agendadas')
            }) .catch((error) => {
                console.error("Error al subir tus fechas", error);
            });
        } else if (banner){
            history.push('/Aprobacion');
            db.collection('banner').add({
                from: getInitialState.from,
                to: getInitialState.to
            }).then(()=>{
                console.log('tus fechas han sido agendadas')
            }) .catch((error) => {
                console.error("Error al subir tus fechas", error);
            });
        }else if (bannerDpto){
            history.push('/Aprobacion');
            db.collection('bannerCentralDpto').add({
                from: getInitialState.from,
                to: getInitialState.to
            }).then(()=>{
                console.log('tus fechas han sido agendadas')
            }) .catch((error) => {
                console.error("Error al subir tus fechas", error);
            });
        }
    }
    const [getInitialState, setGetInitialState] = useState({
        from: undefined,
        to: undefined
      });

    if(superBanner){
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
    } else if (sBannnerCentral){
        return(
            <>
                <Layout>
                    <Header>
                        <MenuProveedor/>
                    </Header>
                    <Content>
                        <Calendario  getInitialState={getInitialState} setGetInitialState={setGetInitialState}/>
                        <SubirArchivos />
                        <button onClick={handleClick}>Enviar</button>
                        <button>Cancelar</button>
                    </Content>
                </Layout>
            </>
        )
    }else if(banner){
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
    } else if (bannerDpto){
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
        
    }

  


export default Comprando