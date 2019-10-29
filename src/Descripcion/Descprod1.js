import React from 'react';
import a1 from '../assets/a1.jpg';
import './descprod1.css';

const Descprod1=(props) =>{
return (
        <div className="a">

            <img src={a1}/>
            

            <p>
                Casa amueblada con piscina, jardin, color blanca y mucho espacio disponible.
                En ella podras tener mucha comodidad, cuenta con servicios básicos, Internet.
                Ten una nueva experiencia en casas y una mejor forma de estar mas conectado conti mismo.
            </p>
            
            <p className="info">
                Propietario: José Perez <br/>
                Direccion: Parque Central 2C al Oeste <br/>
                Telefono: 87659087 <br/>
            </p>

        </div>

    )
}

export default Descprod1;
