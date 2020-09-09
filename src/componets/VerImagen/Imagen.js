import React from 'react';
import { Row, Col, Layout } from 'antd';
const { Content } = Layout

const InfoIssues = ({imagens, imagen, setImagen}) =>{
    const {urlImg} = imagens
    return(
        <Layout >
        <Content >
            <Row >
                <Col span={18} className="detalle-info">
                    <img src={urlImg} />
                 </Col>
            </Row>
    </Content>
    </Layout>
    )
} 
export default InfoIssues