import React, { useState, useEffect } from 'react';
import DetalleBanner from './DetalleBanner'; 
import {firebase, db} from '../../firebase/configFirebase';

const Detalles = () =>{
    const [detalle, setDetalle] = useState([]);
    useEffect(() => {
        const goDetalle = db.collection('tipospublicidad');
        return goDetalle.onSnapshot(snapshotDetalle => {
          const detalleData = []
          snapshotDetalle.forEach(doc => detalleData.push({ ...doc.data(), id: doc.id }));
          //console.log(goDetalle); 
          setDetalle(detalleData);
        });
      }, []);
    return(
        <div >
        {detalle.map((detalles) => (
            <DetalleBanner
              key={detalles.id}
              detalles={detalles}
              detalle={detalle}
              setDetalle={setDetalle}
            />
            ))}
        </div>
    )
}
export default Detalles
    
