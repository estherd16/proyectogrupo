import React from 'react'
import Header from './../frontend/Tema/encabezado';
import Footer from './../frontend/Tema/pie';
import './lista.css'

const Listas =(props)=>{
    const { listado } = props;
    return(
        <div className="ogt">
            <Header/>
            {
                listado.map(
                    (item) => {
                        
                        return (
                            <section className='producto'> 

                                
                                <div

                                    key={item.id}
                                    >
                                
                                    <img src= {item.imagen}/>
                                    <div className ="capa">
                                    <p>{item.tipo}</p>
                                    <p>{item.precio}</p>
                                    <p>{item.telefono}</p>
                                    <p>{item.propietario}</p>
                                    <p>{item.direccion}</p>
                                    </div>
                                    
                                    
                                </div>
                                
                            </section>
                        );
                        
                    }

                )
            }
            <Footer/>
        </div>
    )
}

export default Listas;