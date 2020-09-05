import React from 'react';
import { Menu, } from 'antd';
import 'antd/dist/antd.css';
const Dropmenu = ()=>{
  return (
    <Menu>
    <Menu.ItemGroup title="Group title">
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
    </Menu.ItemGroup>
    </Menu>
  )
}
;

export default Dropmenu;
