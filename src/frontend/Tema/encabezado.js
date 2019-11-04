import React from 'react';
import './encabezado.css';
import imagen from './../../assets/imagen.png';


const Encabezado = () => {
    return (
        <header className = 'contentall'> 
            <img className = 'imagen'
            src = {imagen}
            />
        <nav>
             <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">vista</a></li>
                <li><a href="#">vista2</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Encabezado;
