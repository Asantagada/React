import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <div>
            <h2>{producto.nombre}</h2>
            <h3>{producto.precio}</h3>
            <h3>{producto.stock}</h3>
            <img src={producto.foto} alt={producto.nombre}/>
            <Link to={`/detalle/${producto.id}`}>
                <button type='button' >Ver Detalle</button>
            </Link>
        </div>
    )
}

export default Item
