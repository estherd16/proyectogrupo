import React from 'react';
import './encabezado.css';
import Pie from './pie';
import Encabezado from './encabezado';

import './cuerpo.css';

const Cuerpo = (props) => {
    return (
        <section>
            <Encabezado />
          
            <Pie />
        </section>
    )
}

export default Cuerpo;