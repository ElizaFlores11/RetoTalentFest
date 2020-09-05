import React, {useState} from 'react'
import { Link, BrowserRouter } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const MenuProveedor = () =>{
    const [state, setState] = useState({collapsed:false})
    
    return (
        <Layout>
        <Sider trigger={null} collapsible collapsed={state}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
          </Menu>
        </Sider>
      </Layout>
    )
}
export default MenuProveedor