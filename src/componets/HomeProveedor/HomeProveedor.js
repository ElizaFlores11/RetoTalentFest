import React from 'react';
import MenuProveedor from  '../MenuProveedor/MenuProveedor'
import Pasos from '../Pasos/Pasos'
import TiposCampaña from '../TiposCampaña/TiposCampaña'
import Detalles from '../DetalleBanner/Detalles'
import { Row, Col, Layout } from 'antd';
import TiposdeCampaña from '../TiposCampaña/TiposCampaña';
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
          <h1>Bienvenido</h1>
          <p>Como comprar tu campaña publicitaria</p>
          <Pasos />
          <TiposdeCampaña />
        </Col>
        </Row>
      </Content>
    </Layout>
    )
}
export default HomeProveedor