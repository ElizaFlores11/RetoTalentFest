import React, { useState, useEffect } from 'react';
import DetalleBanner from './DetalleBanner'; 
import { Row, Col} from 'antd';


const Detalles = (ban) =>{  
    
    return(
       <div>
          <Row justify="center" align="bottom">
            <Col span={4}>
              <img src={ban.img}></img>
            </Col>
            <Col span={4}>
              <div>{ban.descripción.texto}</div>
            </Col>
          </Row>
       </div>
    )
}
export default Detalles
    
