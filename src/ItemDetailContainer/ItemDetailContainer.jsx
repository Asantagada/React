import React from 'react'
import {useState, useEffect} from 'react'
import { bringBoards } from '../ItemList/products'
import ItemDetail from './ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})
    useEffect (() => {
    bringBoards
    .then (respuesta => setproducto(respuesta.find(prod => prod.id === '1')))
    }, [])
    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
