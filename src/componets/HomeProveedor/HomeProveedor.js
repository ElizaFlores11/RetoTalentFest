import React from 'react';
import MenuProveedor from  '../MenuProveedor/MenuProveedor'
//import Detalles from '../DetalleBanner/Detalles'
import Informacion from '../InfoCampaña/Informacion'
import { Row, Col, Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const HomeProveedor = () =>{
    return(
    <Layout>
      <Header>
      </Header>
      <Content>
      <Row>
        <Col span={18} push={6} >
        <br />
        <Informacion />
        <b/>
        </Col>
        <Col span={6} pull={18}>
        <MenuProveedor />
        </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    )
}
export default HomeProveedor