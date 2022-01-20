import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
    const [show,setShow]=useState(true)
    const onAdd =(count)=>{
        setShow(false)
        alert(count)
    }
    return (
        <div>
            <h1>{producto.nombre}</h1>
            <h2>Precio: {producto.precio}</h2>
            <img src={producto.foto} alt={producto.nombre} />
            <br></br>
            {show ? <ItemCount stock= {producto.stock} initial="1" onAdd={onAdd}/> : <Link to='/cart'><button>Terminar la compra</button></Link>}
        </div>
    )
}

export default ItemDetail
