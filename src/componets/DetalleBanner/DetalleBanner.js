import React, { useState, useEffect } from 'react';
import { Row, Col, Layout } from 'antd';
import Logo from '../assets/walmart.png'; 

const { Content } = Layout

const DetalleBanner = ({detalles, detalle, setDetalle}) =>{
    const {frase1, frase2, frase3, frase4, frase5, frase6, frase7, imgUrl, titulo} = detalles
    return(
        <Layout >
        <Content >
        <Row className="detalle-info tamdetalle">
            <Col span={18} push={6} className="stylerow tamdetalle">
            <Row>
                <Col span={24}><h2>{titulo}</h2></Col>
            </Row>
            <Row justify="start" className="detalle-info" >
                <Col span={8}><h2>icono</h2></Col>
                <Col span={16}><p>{frase1}</p></Col>
            </Row>
            <Row justify="start" className="detalle-info">
                <Col span={8}><h2>icono</h2></Col>
                <Col span={16}><p>{frase2}</p></Col>
            </Row>
            <Row justify="start" className="detalle-info">
                <Col span={8}><h2>icono</h2></Col>
                <Col span={16}>
                    <p>{frase3}<br/>
                       {frase4}<br/>
                       {frase5}<br/>
                       {frase6}<br/>
                       {frase7}</p>
                </Col>
            </Row>
            <Row>
                <Col span={24}>Componente Botón</Col>
            </Row>
            
        </Col>
        <Col span={6} pull={18}>
            <img src={imgUrl} alt="logo" className="imgdetalle"/>
        </Col>
        </Row>
    </Content>
    <br />
    </Layout>
 
    )
} 
export default DetalleBanner