import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
    return (
        <div>
            {producto.nombre}
            <ItemCount stock= {producto.stock} initial="1"/>
        </div>
    )
}

export default ItemDetail
