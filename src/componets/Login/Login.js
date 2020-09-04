import React  from 'react';
import { Row, Col } from 'antd';
import Logo from '../assets/walmart.png'; 
import LoginFirebase from '../LoginFirebase/LoginFirebase'; 

const Login = () =>{
    return (
    <div className="toprow">
      <Row>
        <Col className="stylerow2" xs={{ span: 4, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        </Col>
        <Col className="stylerow" xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <img src={Logo} alt="logo" />
            <br/><br/><br/>
         <LoginFirebase />
        </Col>
        <Col className="stylerow2" xs={{ span: 4, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        </Col>
      </Row>
    </div>
    ); 
}
export default Login; 