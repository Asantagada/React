import React from 'react';

const Item = ({producto}) => {
    console.log(producto)
    return (
        <div>
            <h2>{producto.nombre}</h2>
            <h3>{producto.precio}</h3>
            <h3>{producto.stock}</h3>
            <img src={producto.foto} alt={producto.nombre}/>
        </div>
    )
}

export default Item
