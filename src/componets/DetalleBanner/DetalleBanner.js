import React from 'react';
import { Row, Col, Layout } from 'antd';
import Logo from '../assets/walmart.png'; 
const { Content } = Layout

const DetalleBanner = () =>{
    return(
        <Layout >
        <Content >
        <Row className="detalle-info tamdetalle">
            <Col span={18} push={6} className="stylerow tamdetalle">
            <Row>
                <Col span={24}><h2>Anuncia tus promociones</h2></Col>
            </Row>
            <Row justify="start" className="detalle-info" >
                <Col span={8}><h2>icono</h2></Col>
                <Col span={16}><p>Es una campaña dinámica, con una presentación en carrusel, apareceras en la pagina de inicio de nuesta página web.</p></Col>
            </Row>
            <Row justify="start" className="detalle-info">
                <Col span={8}><h2>icono</h2></Col>
                <Col span={16}><p>La ventaja de contratar esta campaña es que estaras visible en el momentoque nuestros clientes ingresen a la página.</p></Col>
            </Row>
            <Row justify="start" className="detalle-info">
                <Col span={8}><h2>icono</h2></Col>
                <Col span={16}><p>Ubicación: parte superio de la página <br/>
                                Medidas de 728×293 pixeles<br/>
                                El peso de la imagen sera de máximo<br/>
                                En un formato editable.<br/>
                                Costo:$$$</p>
                </Col>
            </Row>
            <Row>
                <Col span={24}>Componente Botón</Col>
            </Row>
            
        </Col>
        <Col span={6} pull={18}>
            <img src={Logo} alt="logo" className="imgdetalle"/>
        </Col>
        </Row>
    </Content>
    </Layout>
    )
} 
export default DetalleBanner