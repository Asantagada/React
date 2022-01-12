import React from "react";
import { useState, useEffect } from "react";
import { bringBoards } from "../ItemList/products";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {idDetalle}= useParams()
    useEffect(() => {
        bringBoards
        .then(response => setProducto(response.find(prod => prod.id === idDetalle)))
    }, [idDetalle])

    return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
    )
}

export default ItemDetailContainer
