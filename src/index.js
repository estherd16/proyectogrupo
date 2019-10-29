import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
=======
import App from './App';
import Lista from './temas/listacontenedor'
>>>>>>> f39758130c70710da57bd84d1c523b30361adb4c
import * as serviceWorker from './serviceWorker';
import Descprod1 from '../src/Descripcion/Descprod1';

<<<<<<< HEAD

ReactDOM.render(<Descprod1 />, document.getElementById('root'));
=======
ReactDOM.render(<Lista />, document.getElementById('root'));
>>>>>>> f39758130c70710da57bd84d1c523b30361adb4c

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
