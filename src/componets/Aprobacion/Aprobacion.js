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
        let contrato = db.collection('contratopublicidad').doc('Fl0agXgVrfWKscHhDehT')
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
    //console.log(aprobacion.fechafinal);
   //console.log(aprobacion.fechafinal);
    /*const datef = new Date(ff*1000);
            const mesf = datef.getMonth()+1; 
            const diaf = datef.getDate(); 
            const anyof = datef.getYear() - 69;
            const datefinal = diaf + '/' + mesf + '/' + anyof;
            console.log(datefinal)*/
    if(aprobacion?.aprobacion==='pendiente'){
        return(
            <>
            <Layout>
                <Header>
                    <MenuProveedor/>
                </Header>
                <Content>
                    <h1 className='h1-welcome'>Tu campaña está siendo revisada</h1>
                    <div className='aprobacion-blue-container'>
                        <p className='text-blue'>Información de tu campaña</p>
                        <div className='blue-container'>
                            <img src={iconApr} className='icon-medium'></img>
                            <div>
                                <p>Proveedor: {aprobacion.proveedor}  </p>
                                <p>Tipo de campaña: {aprobacion.tipo} </p>
                                <p>Donde aparecerá: {aprobacion.departamento} </p>
                                <p>Fecha de inicio: 9/09/2020</p>
                                <p>Fecha de finalización: 17/09/2020 </p>
                                <p>Costo:</p>
                            </div> 
                        </div>               
                    </div>
                    <div>
                        <p>Recuerda</p>
                        <ul>
                            <li>Tu campaña esta siendo revisada por el equipo de diseño, para verificar que tus archivos sean los más optimos para tu campaña.</li>
                            <li>En las proximas 24 horas recibiras una notificación donde se te indicara si tu campaña ha sido aprobada o reuiqere modificaciones.</li>
                            <li>Si existe algún cambio se te notificara los cambios necesarios y tendrías 24hras para realizarlos o quedara liberado el espacio y tendrás que iniciar el proceso de nuevo</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Gracias por tu confianza</h1>
                        <div>
                            <Logo big />
                        </div>
                        <button>Entendido</button>
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
                                <p>Proveedor:  {aprobacion.proveedor} </p>
                                <p>Tipo de campaña: {aprobacion.tipo} </p>
                                <p>Donde aparecerá: {aprobacion.departamento}</p>
                                <p>Fecha de inicio: 9/09/2020</p>
                                <p>Fecha de finalización: 17/09/2020</p>
                                <p>Costo:</p>
                            </div> 
                        </div>               
                    </div>
                    <div>
                        <p>Tu campaña se vera así:</p>
                        <img src={aprobacion.urlimg} alt={aprobacion.nameimg} />
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
                            <p>Proveedor:</p>
                            <p>Tipo de campaña:</p>
                            <p>Donde aparecerá:</p>
                            <p>Fecha de inicio:</p>
                            <p>Fecha de finalización:</p>
                            <p>Costo:</p>
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