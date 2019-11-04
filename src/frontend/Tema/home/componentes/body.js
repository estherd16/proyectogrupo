import React from 'react';
import Header from './../../encabezado';
import Footer from './../../pie';
import banner from '../../../../assets/bannerhome.jpeg';
import '../componentes/body.css';

const body = (props) => {
    
    return (
            <div className="row">
                <Header/>
                    <div style={{ justifyContent: 'center', alignContent: 'center', display: 'flex'}}>
                        <img src = {banner} width={300} style={{flex: 1, margin:10, borderRadius:10}} />
                        <img src = {banner} width={300} style={{flex: 1, margin:10, borderRadius:10}} />
                        <img src = {banner} width={300} style={{flex: 1, margin:10, borderRadius:10}} />
                    </div>
                    <div className = "cuerpo center">
                        <p className = "text">
                            MINI REAL STATE les ofrece una variedad de casas 
                            a todo tipo de precios,  donde puedes ver sus caracteristicas y asi optar por la que desees. 
                        </p>
                        <p className = "text">
                            Nosotros somos agentes de Bienes raices de Nicaragua ofreciendo casas en ventas y alquiler de todo tipo. 
                        </p>
                    </div>
                <Footer/>
            </div>
    );

};

export default body;