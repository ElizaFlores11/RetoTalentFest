import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom'
import {db} from '../../firebase/configFirebase';
import Calendario from '../Calendario/Calendario'
import SubirArchivos from '../SubirArchivos/SubirArchivos'
import MenuProveedor from '../MenuProveedor/MenuProveedor'
import Dropdowndept from '../Dropdowndept/Dropdowndept'
import icon from '../assets/pasos1.png'
import '../../styles/comprando.scss'
import {Layout} from 'antd';
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
                        <h1 className='h1-welcome'>Comprando</h1>
                        <div className='blue-container'>
                            <img src={icon} className='icon-medium'></img>
                            <p className='text-blue'>Has elegido el Super Banner</p>
                        </div>
                        <div className='main-comprando-container'>
                            <div className='calendar-container'>
                                <Dropdowndept />
                                <Calendario getInitialState={getInitialState} setGetInitialState={setGetInitialState}/>
                            </div>
                            <SubirArchivos />
                            <div className='div-btn-comprando'>
                                <button className='send-btn' onClick={handleClick}>Enviar</button>
                            </div>
                            <div className='div-btn-comprando'>
                                <button className='cancel-btn'>Cancelar</button>
                            </div>
                        </div>
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
                        <h1 className='h1-welcome'>Comprando</h1>
                        <div className='blue-container'>
                            <img src={icon} className='icon-medium'></img>
                            <p className='text-blue' >Has elegido el Super Banner Central</p>
                        </div>
                        <div className='main-comprando-container'>
                            <div className='calendar-container'>
                                <Dropdowndept />
                                <Calendario  getInitialState={getInitialState} setGetInitialState={setGetInitialState}/>
                            </div>
                            <SubirArchivos />
                            <div className='div-btn-comprando'> 
                                <button className='send-btn' onClick={handleClick}>Enviar</button>
                            </div>
                            <div className='div-btn-comprando'> 
                                <button className='cancel-btn'>Cancelar</button>
                            </div>
                        </div>
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
                        <h1 className='h1-welcome'>Comprando</h1>
                        <div className='blue-container'>
                            <img src={icon} className='icon-medium'></img>
                            <p className='text-blue'>Has elegido el Banner Central</p>
                        </div>
                        <div className='main-comprando-container'>
                            <div className='calendar-container'>
                                <Dropdowndept />
                                <Calendario getInitialState={getInitialState} setGetInitialState={setGetInitialState}/>
                            </div>
                            <SubirArchivos />
                            <div className='div-btn-comprando'>
                                <button className='send-btn' onClick={handleClick}>Enviar</button>
                            </div>
                            <div className='div-btn-comprando'>
                                <button className='cancel-btn'>Cancelar</button>
                            </div>
                        </div>
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
                        <h1 className='h1-welcome'>Comprando</h1>
                        <div className='blue-container'>
                            <img src={icon} className='icon-medium'></img>
                            <p className='text-blue'>Has elegido el Banner Central Departamento</p>
                        </div>
                        <div className='main-comprando-container'>
                            <div className='calendar-container'>
                                <Dropdowndept />
                                <Calendario getInitialState={getInitialState} setGetInitialState={setGetInitialState}/>
                            </div>
                            <SubirArchivos />
                            <div className='div-btn-comprando'>
                                <button className='send-btn' onClick={handleClick}>Enviar</button>
                            </div>
                            <div className='div-btn-comprando'>
                                <button className='cancel-btn'>Cancelar</button>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </>
        )
    }
        
    }

  


export default Comprando