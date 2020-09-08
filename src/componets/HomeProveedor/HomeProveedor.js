import React from 'react';
// import {db} from '../../firebase';

import MenuProveedor from  '../MenuProveedor/MenuProveedor'
import Pasos from '../Pasos/Pasos'
import TiposCampaña from '../TiposCampaña/TiposCampaña'

import { Row, Col, Layout } from 'antd';
const { Header, Content } = Layout;

const HomeProveedor = () =>{

  // const [contrato, setContrato]= useState([]);
  // const getInfo = async () =>{
  //   let contratoPublicidad = db.collection('users')
  //   contratoPublicidad.onSnapshot((querySnapshot)=>{
  //     const docs = [];
  //     querySnapshot.


  //   })
  // }

  // const [finishedOrders, setFinishedOrders] = useState([]);
  //   const getFinishedOrders = async () => {
  //       let orders = db.collection('orders').where("status", "==", true).orderBy('finish', 'desc');
  //       orders.onSnapshot((querySnapshot) => {
  //           const docs = [];
  //           querySnapshot.forEach((doc) => {
  //               docs.push({...doc.data(), id: doc.id})
  //           });
  //           setFinishedOrders(docs);
  //       });
  //   }

  //   useEffect(() => {
  //       getFinishedOrders();
  //   }, [])

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