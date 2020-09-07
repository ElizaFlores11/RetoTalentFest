import React, { useState, useEffect } from 'react';
import { Row, Col} from 'antd';

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
    if(sBanner){
        return(
            <>
            {superBanner.map(ban=>              
                <div>
                    <Row justify="space-around" align="bottom">
                    <Col span={4}>
                        <div>
                            <img src={ban.img} key={ban.id} ></img>
                        </div>                        
                    </Col>
                    <Col span={4}>
                        <div className='details-flex-container'>
                            <img src={ban.descripción.icon}></img>
                            <div>{ban.descripción.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img src={ban.ventaja.icon}></img>
                            <div>{ban.ventaja.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img src={ban.ubicación.icon}></img>
                            <div>{ban.ubicación.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img src={ban.costo.icon}></img>
                            <div>{ban.costo.texto}</div>
                        </div>
                    </Col>
                    </Row>
                    <div>
                        <button className='yellow-btn'>Comprar</button>
                    </div>
                </div>
            )}
            </>
        )
    } else if (ban){
        return(
            <>
                {banner.map(ban=>
                    <div>
                    <Row justify="space-around" align="bottom">
                    <Col span={4}>
                        <div>
                            <img src={ban.img} key={ban.id} ></img>
                        </div>                        
                    </Col>
                    <Col span={4}>
                        <div className='details-flex-container'>
                            <img src={ban.descripción.icon}></img>
                            <div>{ban.descripción.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img src={ban.ventaja.icon}></img>
                            <div>{ban.ventaja.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img src={ban.ubicación.icon}></img>
                            <div>{ban.ubicación.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img src={ban.costo.icon}></img>
                            <div>{ban.costo.texto}</div>
                        </div>
                    </Col>
                    </Row>
                    <div>
                        <button className='yellow-btn'>Comprar</button>
                    </div>
                </div>
                )}
            </>
        )
    }
    
} 
export default DetalleBanner