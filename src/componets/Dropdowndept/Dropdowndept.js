import React, {useState} from 'react';
import { Select } from 'antd';

const { Option } = Select;

const onChange = (value)=> {
  console.log(`selected ${value}`);
}


const Dropmenu = ()=>{
  return (
    <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="Electrodomésticos & línea blanca">Electrodomésticos & línea blanca</Option>
    <Option value="Celulares & cámaras">Celulares & cámaras</Option>
    <Option value="Autos & motos">Autos & motos</Option>
    <Option value="Colchones, muebles & jardín">Colchones, muebles & jardín</Option>
    <Option value="Hogar, casa inteligente & ferretería">Hogar, casa inteligente & ferretería</Option>
    <Option value="Moda, belleza & salud">Moda, belleza & salud</Option>
    <Option value="Bebés">Bebés</Option>
    <Option value="Mascotas">Mascotas</Option>
    <Option value="Películas, libros & artículos de temporada">Películas, libros & artículos de temporada</Option>
    <Option value="Vinos, licores & despensa">Vinos, licores & despensa</Option>
  </Select>
  )
}
;

export default Dropmenu;
/*<Menu>
    <Menu.ItemGroup title="Departamento">
      <Menu.Item>Electrodomésticos & línea blanca</Menu.Item>
      <Menu.Item>Celulares & cámaras</Menu.Item>
      <Menu.Item>Pantallas, audio e instrumentos musicales</Menu.Item>
      <Menu.Item>Computadoras, papelería & oficina</Menu.Item>
      <Menu.Item>Videojuegos y juguetes</Menu.Item>
      <Menu.Item>Deportes</Menu.Item>
      <Menu.Item>Autos & motos</Menu.Item>
      <Menu.Item>Colchones, muebles & jardín</Menu.Item>
      <Menu.Item>Hogar, casa inteligente & ferretería</Menu.Item>
      <Menu.Item>Moda, belleza & salud</Menu.Item>
      <Menu.Item>Bebés</Menu.Item>
      <Menu.Item>Mascotas</Menu.Item>
      <Menu.Item>Películas, libros & artículos de temporada</Menu.Item>
      <Menu.Item>Vinos, licores & despensa</Menu.Item>
    </Menu.ItemGroup>
    </Menu>*/