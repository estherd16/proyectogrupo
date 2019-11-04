import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Body from './../src/frontend/Tema/home/componentes/body';
import * as serviceWorker from './serviceWorker';
import Descprod1 from '../src/Descripcion/Descprod1';


ReactDOM.render(<Body/>, document.getElementById('root'));
/*ReactDOM.render(<Lista />, document.getElementById('root'));*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
