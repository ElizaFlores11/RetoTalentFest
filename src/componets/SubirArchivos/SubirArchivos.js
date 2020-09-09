import React, {useState} from 'react';
import {firebase, db} from '../../firebase/configFirebase'; 
import FileUploader from "react-firebase-file-uploader";
import VerImagen from "../VerImagen/VerImagen"
require("firebase/storage");
const SubirArchivos = () =>{
    /* <VerImagen/>  */
    const [state, setState] = useState({
        filenames: [],
        downloadURLs: [],
        isUploading: false,
        uploadProgress: 0
      });
    
      const  handleUploadStart = () =>
        setState({
          isUploading: true,
          uploadProgress: 0
        });
    
      const handleProgress = progress =>
        setState({
          uploadProgress: progress
        });
    
      const handleUploadError = error => {
         setState({
          isUploading: false
          // Todo: handle error
        });
        console.error(error);
      };
    
      const handleUploadSuccess = async filename => {
        const downloadURL = await firebase
          .storage()
          .ref("imagenes")
          .child(filename)
          .getDownloadURL();
        let onchangeState = db.collection("fotos");
        onchangeState.add({
            "urlImg": downloadURL,
            "nameImg": filename

        }).then(function () {
            //alert("Registro cancelado exitosamente");

        }).catch(function (error) {
            console.error("Error updating document: ", error);
        });
        
        setState(oldState => ({
          //filenames: [...oldState.filenames, filename],
          //downloadURLs: [...oldState.downloadURLs, downloadURL],
          uploadProgress: 100,
          isUploading: false
        }));
      };
      const { downloadURLs } = state
    return (
      <div>
      <FileUploader
        accept="image/*"
        name="image-uploader-multiple"
        //randomizeFilename
        storageRef={firebase.storage().ref("imagenes")}
        onUploadStart={handleUploadStart}
        onUploadError={handleUploadError}
        onUploadSuccess={handleUploadSuccess}
        onProgress={handleProgress}
        multiple
      />
      <p>Progress: {state.uploadProgress}</p>
    </div>
    )
   }


export default SubirArchivos; 