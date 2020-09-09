import React, {Fragment, useState} from 'react';
import { Select } from 'antd';
  const { Option } = Select;
  

const Dropdowndept = ({dept, depto, setDepto})=>{
  
  const { departamento } = depto
  const onChange2 = (value)=> {
   const departamento = `${value}`;
    setDepto(depto + 1)
    
  }
  console.log(departamento)
    return (
    <Fragment >
    <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Selecciona Departamento"
    optionFilterProp="children"
    //value={departamento}
    onChange={onChange2}
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
</Fragment>
  )
}
;

export default Dropdowndept;
