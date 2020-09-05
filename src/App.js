import React, {Fragment} from 'react';
import 'antd/dist/antd.css';
import './styles/styles.scss';
import Routes from './componets/Routes'; 
import Calendario from './componets/Calendario/Calendario'

function App() {
  return (
    <Fragment >
      <Calendario />
    </Fragment>
  );
}

export default App;
