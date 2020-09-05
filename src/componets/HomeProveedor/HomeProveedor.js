import React from 'react';
import MenuProveedor from  '../MenuProveedor/MenuProveedor'
//<MenuProveedor />
import DetalleBanner from '../DetalleBanner/DetalleBanner'
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
        <DetalleBanner />
     
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