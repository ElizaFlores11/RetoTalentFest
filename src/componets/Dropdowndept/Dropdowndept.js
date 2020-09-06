import React from 'react';
import { Menu, } from 'antd';
import 'antd/dist/antd.css';
const Dropmenu = ()=>{
  return (
    <Menu>
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
    </Menu>
  )
}
;

export default Dropmenu;