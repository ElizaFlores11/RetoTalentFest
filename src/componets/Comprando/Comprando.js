import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import {db, firebase} from '../../firebase/configFirebase';
import Calendario from '../Calendario/Calendario'
import SubirArchivos from '../SubirArchivos/SubirArchivos'
import MenuProveedor from '../MenuProveedor/MenuProveedor'
import {Layout, Select } from 'antd';
const { Option } = Select;

const { Header, Content } = Layout;

const Comprando= ({superBanner, sBannnerCentral, banner, bannerDpto})=> {
    let history = useHistory()

    function handleClick() {

        if(superBanner){
            history.push('/Aprobacion');
            db.collection('superBanner').add({
                proveedor: "proveedor",
                departamento: depto,
                from: getInitialState.from,
                to: getInitialState.to
            }).then(()=>{
                console.log('tus fechas han sido agendadas')
            }) .catch((error) => {
                console.error("Error al subir tus fechas", error);
            });
        }       
         else if (sBannnerCentral){
            history.push('/Aprobacion');
            db.collection('superBannerDpto').add({
                proveedor: "proveedor",
                departamento: depto,
                from: getInitialState.from,
                to: getInitialState.to
            }).then(()=>{
                console.log('tus fechas han sido agendadas')
            }) .catch((error) => {
                console.error("Error al subir tus fechas", error);
            });
        } else if (banner){
            history.push('/Aprobacion');
            db.collection('banner').add({
                proveedor: "proveedor",
                departamento: depto,
                from: getInitialState.from,
                to: getInitialState.to
            }).then(()=>{
                console.log('tus fechas han sido agendadas')
            }) .catch((error) => {
                console.error("Error al subir tus fechas", error);
            });
        }else if (bannerDpto){
            history.push('/Aprobacion');
            db.collection('bannerCentralDpto').add({
                proveedor: "proveedor",
                departamento: depto,
                from: getInitialState.from,
                to: getInitialState.to
            }).then(()=>{
                console.log('tus fechas han sido agendadas')
            }) .catch((error) => {
                console.error("Error al subir tus fechas", error);
            });
        }
    }
    const [getInitialState, setGetInitialState] = useState({
        from: undefined,
        to: undefined
      });
    const [depto, setDepto] = useState(null)
    const onChangeDepto = (value)=> {
        const departamento = `${value}`;
         setDepto(departamento)
         
       }

    if(superBanner){
        return(
            <>
                <Layout>
                    <Header>
                        <MenuProveedor/>
                    </Header>
                    <Content>
                    <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Selecciona Departamento"
                            optionFilterProp="children"
                            onChange={onChangeDepto}
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
                        <Calendario getInitialState={getInitialState} setGetInitialState={setGetInitialState}/>
                        <SubirArchivos />
                        <button onClick={handleClick}>Enviar</button>
                        <button>Cancelar</button>
                    </Content>
                </Layout>
            </>
        )
    } else if (sBannnerCentral){
        return(
            <>
                <Layout>
                    <Header>
                        <MenuProveedor/>
                    </Header>
                    <Content>
                    <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Selecciona Departamento"
                            optionFilterProp="children"
                            onChange={onChangeDepto}
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
                        <Calendario  getInitialState={getInitialState} setGetInitialState={setGetInitialState}/>
                        <SubirArchivos />
                        <button onClick={handleClick}>Enviar</button>
                        <button>Cancelar</button>
                    </Content>
                </Layout>
            </>
        )
    }else if(banner){
        return(
            <>
                <Layout>
                    <Header>
                        <MenuProveedor/>
                    </Header>
                    <Content>
                    <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Selecciona Departamento"
                            optionFilterProp="children"
                            onChange={onChangeDepto}
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
                        <Calendario getInitialState={getInitialState} setGetInitialState={setGetInitialState}/>
                        <SubirArchivos />
                        <button onClick={handleClick}>Enviar</button>
                        <button>Cancelar</button>
                    </Content>
                </Layout>
            </>
        )
    } else if (bannerDpto){
        return(
            <>
                <Layout>
                    <Header>
                        <MenuProveedor/>
                    </Header>
                    <Content>
                    <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Selecciona Departamento"
                            optionFilterProp="children"
                            onChange={onChangeDepto}
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
                        <Calendario getInitialState={getInitialState} setGetInitialState={setGetInitialState}/>
                        <SubirArchivos />
                        <button onClick={handleClick}>Enviar</button>
                        <button>Cancelar</button>
                    </Content>
                </Layout>
            </>
        )
    }
        
    }

  


export default Comprando