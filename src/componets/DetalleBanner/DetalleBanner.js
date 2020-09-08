import React from 'react';
import { useHistory } from 'react-router-dom'
import { Row, Col} from 'antd';
import MenuProveedor from  '../MenuProveedor/MenuProveedor'

import '../../styles/detalleBanner.scss'

let superBanner = [
    {
        id: 'superBanner',
        descripción: {
            texto: 'Es una campaña dinámica, con una presentación en carrusel, aparecerás en el inicio de nuestra página web.',
            icon:'../assets/iconDescr.png'
        },
        ventaja:{
            texto:'La ventaja de contratar esta campaña es que estarás visible en el momento que nuestros clientes ingresen a la página.',
            icon:'../assets/iconVentajas.png'
        }, 
        ubicación:{
            texto:'Ubicación: parte superior de la página.Medidas de 728×293 pixeles. El peso de la imagen sera de máximo 25mb. En un formato editable.',
            icon:'../assets/iconUbi.png'
        },
        costo:{
            texto:'$$$',
            icon:'../assets/iconCosto.png'
        },

        img:'../assets/sBanner.png'
    },
    {
        id: 'superBannerCentral',
        descripción: {
            texto:'Es una campaña ubicada dentro del departamento que corresponde a tu producto, es una presentación de carrusel.',
            icon:'../assets/iconDescr.png'
        },
        ventaja:{
            texto:'La ventaja de contratar esta campaña es que cuando nuestro cliente de click sera diseccionado a una sección especial donde visualizara unicamente tus productos',
            icon:'../assets/iconVentajas.png'
        }, 
        ubicación:{
            texto:'Ubicación: a la mitad de la página web. Medidas de 728×293 pixeles. El peso de la imagen sera de máximo. En un formato editable.',
            icon:'../assets/iconUbi.png'
        },
        costo:{
            texto:'$$$',
            icon:'../assets/iconCosto.png'
        },

        img:'../assets/sBannerCentral.png'
    }
]
let banner = [
    {
        id: 'bannerCentral',
        descripción: {
            texto:'Es una campaña estática que aparece a la mitad de la página principal.',
            icon:'../assets/iconDescr.png'
        },
        ventaja:{
            texto:'La ventaja de elegir este formato es que cuando nuestro cliente de click sera redireccionado a una sección especial con los productos de tu marca disponibles en la tienda.',
            icon:'../assets/iconVentajas.png'
        }, 
        ubicación:{
            texto:'Ubicación: parte central de la página. Medidas de 728×90 pixeles. El peso de la imagen sera de máximo. En un formato editable.',
            icon:'../assets/iconUbi.png'
        },
        costo:{
            texto:'$$$',
            icon:'../assets/iconCosto.png'
        },

        img:'../assets/banner.png'
    },
    {
        id: 'bannerDpto',
        descripción: {
            texto:'Es una campaña estática que aparece a la mitad de la página del departamento al que corresponde tu marca',
            icon:'../assets/iconDescr.png'
        },
        ventaja:{
            texto:'La ventaja de elegir este formato es que cuando nuestro cliente ingrese a el departamento, podra dar click y sera dirigido a una sección especial con los productos de tu marca disponibles en la tienda.',
            icon:'../assets/iconVentajas.png'
        }, 
        ubicación:{
            texto:'Ubicación: parte central de la página. Medidas de 728×90 píxeles. El peso de la imagen sera de máximo. En un formato editable.',
            icon:'../assets/iconUbi.png'
        },
        costo:{
            texto:'$$$',
            icon:'../assets/iconCosto.png'
        },

        img:'../assets/bannerDpto.png'
    }
]

const DetalleBanner = ({sBanner, ban}) =>{
    let history = useHistory()

    function handleClick() {

        history.push('/Comprando')
    }
    if(sBanner){
        return(
            <>
            <MenuProveedor />
            <h1 className='h1-welcome'>Super Banner</h1>
            {superBanner.map(ban=>              
                <div className='detail-blue-container'>
                    
                    <Row justify="space-around" align="bottom">
                    <Col span={12}>
                        <div className='detail-img-container'>
                            <img src={ban.img} key={ban.id} className='banner-detail-img'></img>
                        </div>                        
                    </Col>
                    <Col span={12}>
                        <div className='detail-container'>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.descripción.icon} key={ban.id}></img>
                            <div>{ban.descripción.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.ventaja.icon} key={ban.id}></img>
                            <div>{ban.ventaja.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.ubicación.icon} key={ban.id}></img>
                            <div>{ban.ubicación.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.costo.icon} key={ban.id}></img>
                            <div>{ban.costo.texto}</div>
                        </div>
                        </div>
                    </Col>
                    </Row>
                    <div className='detail-btn-comprar'>
                        <button className='yellow-btn detail' onClick={handleClick}>Comprar</button>
                    </div>
                </div>
            )}
            <div className='detail-btn-regresar-cont'>  
                <button className='detail-btn-regresar'>Regresar</button>
            </div>
            
            </>
        )
    } else if (ban){
        return(
            <>
                <MenuProveedor />
                <h1 className='h1-welcome'>Banner</h1>
                {banner.map(ban=>
                    <div className='detail-blue-container'>
                                        
                    <Row justify="space-around" align="bottom">
                    <Col  span={12}>
                        <div className='detail-img-container'>
                            <img className='icon' src={ban.img} key={ban.id} className='banner-detail-img'></img>
                        </div>                        
                    </Col>
                    <Col  span={12}>
                        <div className='detail-container'>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.descripción.icon} key={ban.id}></img>
                            <div>{ban.descripción.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.ventaja.icon} key={ban.id}></img>
                            <div>{ban.ventaja.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.ubicación.icon} key={ban.id}></img>
                            <div>{ban.ubicación.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.costo.icon} key={ban.id}></img>
                            <div>{ban.costo.texto}</div>
                        </div>
                        </div>
                    </Col>
                    </Row>
                    <div className='detail-btn-comprar'>
                        <button className='yellow-btn detail' onClick={handleClick}>Comprar</button>
                    </div>
                </div>
                )}
                <div className='detail-btn-regresar-cont'>  
                    <button className='detail-btn-regresar'>Regresar</button>
                </div>
            </>
        )
    }
    
} 
export default DetalleBanner