import React, {useState, useEffect} from 'react';
import {db} from '../../firebase/configFirebase';
import { useHistory } from 'react-router-dom'
import {Layout} from 'antd';
import MenuProveedor from '../MenuProveedor/MenuProveedor'
import SubirArchivos from '../SubirArchivos/SubirArchivos'
import VerImagen from '../VerImagen/VerImagen'
import Logo from '../Logo/Logo'
import iconApr from '../assets/pasosAprob.png'
import DatosCuenta from '../Datosdecuenta/Datoscuenta';


const { Header, Content } = Layout;

const Aprobacion = () =>{
    // let history = useHistory()

    // function handleClick() {

    //     history.push('/Completado')
    // }
    const [aprobacion, getAprobacion]= useState();

    const getData = async () => {
        let contrato = db.collection('contratopublicidad').doc('fUqzI3yh6abNcoWF8dSZ')
        contrato.get().then((doc)=>{
            if(doc.exists){
                getAprobacion({...doc.data()})
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });    
    }

    useEffect(()=>{
        getData()
    },[])
    console.log(aprobacion)

    if(aprobacion?.aprobacion==='pendiente'){
        return(
            <>
            <Layout>
                <Header>
                    <MenuProveedor/>
                </Header>
                <Content>
                    <div className='full-box-aprob'>
                    <h1 className='h1-welcome'>Tu campaña está siendo revisada</h1>
                    <div className='aprobacion-blue-container'>
                        <p className='aprob-text-blue'>Información de tu campaña</p>
                        <div className='aprob-blue-container'>
                            <img src={iconApr} className='icon-medium'></img>
                            <div>
                                <ul>
                                    <li className='aprob-info'>Proveedor:</li>
                                    <li className='aprob-info'>Tipo de campaña:</li>
                                    <li className='aprob-info'>Donde aparecerá:</li>
                                    <li className='aprob-info'>Fecha de inicio:</li>
                                    <li className='aprob-info'>Fecha de finalización:</li>
                                    <li className='aprob-info'>Costo:</li>
                                </ul>
                            </div> 
                        </div>               
                    </div>
                    <div className='aprob-remember'>
                        <p>Recuerda</p>
                        <ul>
                            <li>Tu campaña esta siendo revisada por el equipo de diseño, para verificar que tus archivos sean los más optimos para tu campaña.</li>
                            <li>En las proximas 24 horas recibiras una notificación donde se te indicara si tu campaña ha sido aprobada o reuiqere modificaciones.</li>
                            <li>Si existe algún cambio se te notificara los cambios necesarios y tendrías 24hras para realizarlos o quedara liberado el espacio y tendrás que iniciar el proceso de nuevo</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='aprob-txt-tnks'>Gracias por tu confianza</h1>
                        <div className='container-logo-apr'>
                            <Logo big />
                        </div>
                        <button className='aprob-btn'>Entendido</button>
                    </div>
                    </div>
                </Content>
    
            </Layout>
            </>
        )
    } else if (aprobacion?.aprobacion==='aprobada'){
        return(
            <>
            <Layout>
                <Header>
                    <MenuProveedor/>
                </Header>
                <Content>
                    <h1 className='h1-welcome'>Tu campaña ha sido aprobada C:</h1>
                    <div className='aprobacion-blue-container'>
                        <p className='text-blue'>Información de tu campaña</p>
                        <div className='blue-container'>
                            <img src={iconApr} className='icon-medium'></img>
                            <div>
                                <ul>
                                    <li className='aprob-info'>Proveedor:</li>
                                    <li className='aprob-info'>Tipo de campaña:</li>
                                    <li className='aprob-info'>Donde aparecerá:</li>
                                    <li className='aprob-info'>Fecha de inicio:</li>
                                    <li className='aprob-info'>Fecha de finalización:</li>
                                    <li className='aprob-info'>Costo:</li>
                                </ul>
                            </div> 
                        </div>               
                    </div>
                    <div>
                        <p>Tu campaña se vera así:</p>
                        <VerImagen />
                    </div>
                    <div>
                        <p>Para finalizar el proceso de contratación, ingresa tus datos de cuenta para realizar el pago correspondiente.</p>
                        <DatosCuenta />
                        <button>Comprar</button>
                        <button>Cancelar</button>
                    </div>
                </Content>
    
            </Layout>
            </>
        )
    } else if(aprobacion?.aprobacion==='rechazada'){
        return(
            <>
            <Layout>
                <Header>
                    <MenuProveedor/>
                </Header>
                <Content>
                    <h1 className='h1-welcome'>Tu campaña requiere ser modificada</h1>
                    <div className='aprobacion-blue-container'>
                        <p className='text-blue'>Información de tu campaña</p>
                        <div className='blue-container'>
                        <img src={iconApr} className='icon-medium'></img>
                        <div>
                            <ul>
                                <li className='aprob-info'>Proveedor:</li>
                                <li className='aprob-info'>Tipo de campaña:</li>
                                <li className='aprob-info'>Donde aparecerá:</li>
                                <li className='aprob-info'>Fecha de inicio:</li>
                                <li className='aprob-info'>Fecha de finalización:</li>
                                <li className='aprob-info'>Costo:</li>
                            </ul>
                        </div> 
                        </div>               
                    </div>
                    <div>
                        <h1>Cambios requeridos</h1>
                        <div>
                            <ul>
                                <li>Tu archivo de nombre “advertising.png” no cumple con la resolución. </li>
                                <li>Tu archivo de nombre “advertising.png” no cumple con el tamaño indicado. </li>
                            </ul>
                        </div>
                        <SubirArchivos />
                        <div>
                        <p>Recuerda</p>
                        <ul>
                            <li>Tu campaña esta siendo revisada por el equipo de diseño, para verificar que tus archivos sean los más optimos para tu campaña.</li>
                            <li>En las proximas 24 horas recibiras una notificación donde se te indicara si tu campaña ha sido aprobada o reuiqere modificaciones.</li>
                            <li>Si existe algún cambio se te notificara los cambios necesarios y tendrías 24hras para realizarlos o quedara liberado el espacio y tendrás que iniciar el proceso de nuevo</li>
                        </ul>
                    </div>
                    </div>
                </Content>
    
            </Layout>
            </>
        )
    } else{
        return(
            <div>...Cargando</div>
        )
    }

    
    
}

export default Aprobacion