import React, {useState, useEffect, Fragment} from 'react';
import Entrar from '../Entrar/Entrar'; 
import {firebase, db} from '../../firebase/configFirebase'; 
require("firebase/auth");

const IniciarSesion = () =>{
    const userStatus = () => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log(userStatus);
            //router('content');
          } else {
            console.log("user");
          }
        });
    }
    const usuario = firebase.auth().currentUser;
    //const uid = usuario.uid;
     //Ejemplo de ordern 
   const [sesion, setSesion] = useState([]);
   useEffect(() => {
     const goUser = db.collection('users').where('uid', '==', usuario.uid);
    //console.log(goReady.perfil); 
     return goUser.onSnapshot(snapshotUser => {
       const userData = []
       snapshotUser.forEach(doc => userData.push({ ...doc.data(), id: doc.id }));
       setSesion(userData);
    });
   }, []);
    return(
        <Fragment>
            <div >
            {sesion.map((sesions)=> (
                <Entrar
                key={sesions.id}
                sesions={sesions}
                sesion={sesion}
                props= "props"
                />
                )
              )
            }
            </div>
        </Fragment>
    ); 
}

export default IniciarSesion