import React, { Component } from 'react';
import Lista from './listas'

class Listascont extends Component {
    constructor(props) {
        super(props);

        const producto = [
            {
                imagen: require('././../assets/a1.jpg'),
                tipo: 'casa',
                precio: '$12000',
                telefono: '87559911',
                id: '1234'
               
            },
            {
                imagen: require('././../assets/a2.jpg'),
                tipo: 'casa',
                precio: '$14000',
                telefono: '87749921',
                id: '12345'
            },
            {
                imagen: require('././../assets/a3.jpg'),
                tipo: 'casa',
                precio: '$22000',
                telefono: '87859951',
                id: '123456'
            },
            {
                imagen: require('././../assets/a4.jpg'),
                tipo: 'casa',
                precio: '$34000',
                telefono: '83546188',
                id: '12347'
            },
        ];

        this.state = {
            datos: producto,
            color: 'focus'
        }
    }
    selecciona =(valor)=>{
        this.state({colo:valor})
    }

    render() {
        const { datos, color } = this.state;
        return (
            <Lista
                color = {color}
                selecciona ={this.selecciona}
                listado={datos}
            />
        );
    }
}

export default Listascont;