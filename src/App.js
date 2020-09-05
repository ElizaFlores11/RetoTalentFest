import React, {Fragment} from 'react';
import 'antd/dist/antd.css';
import './styles/styles.scss';
import Routes from './componets/Routes'; 
import Dropmenu from './componets/ Dropdrown/dropdown';
function App() {
  return (
    <Fragment >
      <Routes />
      <Dropmenu/>
    </Fragment>
  );
}

export default App;
