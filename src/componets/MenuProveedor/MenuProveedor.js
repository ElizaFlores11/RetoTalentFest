import React, {useState} from 'react'
import { Link, BrowserRouter } from "react-router-dom";
import  {Menu, Col, Row} from 'antd';
import Logo from '../Logo/Logo' 
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const MenuProveedor = () =>{
    
    return (
          <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Row>
            <Col span={12}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>

            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/">
                Salir
              </Link>
            </Menu.Item>
            </Col>
            </Row>
            <Row>
            <Col span={12}>
            <Menu.Item ><Logo small /></Menu.Item>
            </Col>
            </Row>
          </Menu>
    )
}
export default MenuProveedor