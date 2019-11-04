import React from 'react';
import a1 from '../assets/a1.jpg';
import './descprod1.css';
import Header from './../frontend/Tema/encabezado';
import Footer from './../frontend/Tema/pie';
import Bed from './../assets/bed.png';
import Bath from './../assets/bathtub.png';
import Car from './../assets/car.png';
import Size from './../assets/icon.png';
import Location from './../assets/location.png';
import Coin from './../assets/coin.png';

const Descprod1=(props) =>{
return (

            <div className="ContentInfo">
                <Header></Header>
                    <img className="ImgInf" src={a1}/>
                    
                    <div className="AllInf">
                        <p className="Descrip">
                            Casa amueblada con piscina, jardin, color blanca y mucho espacio disponible.
                            En ella podras tener mucha comodidad, cuenta con servicios básicos.
                            Ten una nueva experiencia en casas y una mejor forma de estar mas conectado contigo mismo.
                        </p>
                        
                        <p className="Relevant">
                            Propietario: José Perez <br/>
                            Direccion: Parque Central 2C al Oeste <br/>
                            Telefono: 87659087 <br/>
                        </p>

                        <div className="Carac"> 
                            <ul className="ListOp">
                                <img className="ImgCarac" src={Bed}/><label className="InfCarac">Recamaras 5</label>
                                <img className="ImgCarac" src={Bath}/><label className="InfCarac">Baños 2</label>
                                <img className="ImgCarac" src={Car}/><label className="InfCarac">Parking 1</label>
                                <img className="ImgCarac" src={Size}/><label className="InfCarac">M² de construcción 320</label>
                                <img className="ImgCarac" src={Location}/><label className="InfCarac">Localización Las Colinas</label>
                                <img className="ImgCarac" src={Coin}/><label className="InfCarac">Precio: $220,000.00</label>
                            </ul>
                         </div>
                    </div> 
                <Footer></Footer>

            </div>
    )
}

export default Descprod1;
