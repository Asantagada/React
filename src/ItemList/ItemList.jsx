import React from 'react'
import { getFetch } from "../ItemList/Item";
import { useState } from "react";


function ItemList() {
    const [tablas, settablas]=useState([]);
    getFetch
    .then(resp=>settablas(resp))
    .catch(err=>console.log(err))
    return (
        <div>
            {tablas.map(tabla=><li key={tabla.id}>{tabla.nombre} Precio:{tabla.precio}</li>)}
        </div>
    )
}

export default ItemList
