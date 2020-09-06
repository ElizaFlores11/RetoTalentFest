import React from 'react';
import MenuProveedor from  '../MenuProveedor/MenuProveedor'
import Pasos from '../Pasos/Pasos'
import TiposCampaña from '../TiposCampaña/TiposCampaña'

import { Row, Col, Layout } from 'antd';
const { Header, Content } = Layout;

const HomeProveedor = () =>{
    return(
    <Layout>
      <Header>
        <MenuProveedor />
      </Header>
      <Content>
        <Row>
          <Col span={12} push={3} >
            <Pasos />
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={6}>
            <TiposCampaña />
          </Col>
        </Row>
      </Content>
    </Layout>
    )
}
export default HomeProveedor