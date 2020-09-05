import React from 'react';
import { Row, Col, Layout } from 'antd';
const { Content } = Layout

const DetalleBanner = () =>{
    return(
        <Layout >
        <Content >
            <Row >
                <Col span={18} className="detalle-info">
                    <h2 className="center">Información de campaña</h2>
                    <p className="p">Proveedor</p>
                    <p className="p">Super Banner Central</p>
                    <p className="p">Departamento: Vinos y Liconres</p>
                    <p className="p">Fecha de inicio: 13/10/2020</p>
                    <p className="p">Fecha de finalizacion: 13/11/2020</p>
                </Col>
            </Row>
    </Content>
    </Layout>
    )
} 
export default DetalleBanner