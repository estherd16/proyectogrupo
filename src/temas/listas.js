import React from 'react'
import './lista.css'

const Listas =(props)=>{
    const { listado } = props;
    return(
        <div className="ogt">
            {
                listado.map(
                    (item) => {

                        return (
                            <div
                                key={item.id}
                                className='producto'>
                            
                                <img src= {item.imagen}/>
                                <div className ="capa">
                                <p>{item.tipo}</p>
                                <p>{item.precio}</p>
                                <p>{item.telefono}</p>
                                </div>
                                
                                
                            </div>
                        );

                    }
                )
            }
        </div>
    )
}

export default Listas;