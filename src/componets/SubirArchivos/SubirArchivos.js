import React, {useState} from 'react';
import {firebase} from '../../firebase/configFirebase'; 
import FileUploader from 'react-firebase-file-uploader';
require("firebase/storage");

const SubirArchivos = () =>{
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
    
        setState(oldState => ({
          //filenames: [...oldState.filenames, filename],
          //downloadURLs: [...oldState.downloadURLs, downloadURL],
          uploadProgress: 100,
          isUploading: false
        }));
      };
    return (
      <div>
      <FileUploader
        accept="image/*"
        name="image-uploader-multiple"
        randomizeFilename
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