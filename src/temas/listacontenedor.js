import React, { Component } from 'react';
import Lista from './listas'

class Listascont extends Component {
    constructor(props) {
        super(props);

        const producto = [
            {
                imagen: require('././../assets/a1.jpg'),
                tipo: 'casa',
                precio: 'precio: $12000',
                telefono: 'Telefono: 87559911',
                propietario:'Dueño: secundino Angulo',
                direccion: 'Direccion: Del palo de mango como tres cuadras para abajo',
                id: '1234'
               
            },
            {
                imagen: require('././../assets/a2.jpg'),
                tipo: 'casa',
                precio: 'Precio: $14000',
                telefono: 'Telefono: 87749921',
                propietario:'Dueño: Milos Papastathopoulos',
                direccion: 'Direccion: Por donde pasa la ruta, en una casa verde',
                id: '12345'
            },
            {
                imagen: require('././../assets/a3.jpg'),
                tipo: 'casa',
                precio: 'Precio: $22000',
                telefono: 'Telefono: 87859951',
                propietario:'Dueño: Ezio Auditore',
                direccion: 'Direccion: De americable 3 cuadras al norte, ¡NO!, al sur',
                id: '123456'
            },
            {
                imagen: require('././../assets/a4.jpg'),
                tipo: 'casa',
                precio: 'Precio: $34000',
                telefono: 'Telefono: 83546188',
                propietario:'Dueño: Marcus Phoenix',
                direccion: 'Direccion: Ella no te ama',
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