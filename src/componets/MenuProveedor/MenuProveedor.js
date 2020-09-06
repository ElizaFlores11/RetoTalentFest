import React, {useState} from 'react'
import { Link, BrowserRouter } from "react-router-dom";
import  {Menu} from 'antd';
import Logo from '../Logo/Logo'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const MenuProveedor = () =>{
    
    return (
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
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
            <Menu.Item><Logo small /></Menu.Item>
          </Menu>
    )
}
export default MenuProveedor