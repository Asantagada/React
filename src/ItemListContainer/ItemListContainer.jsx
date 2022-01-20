import React, {useState, useEffect} from "react";
import {bringBoards} from "../ItemList/products";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom"

const ItemListContainer =({saludo})=>{
    const [data, setData]=useState([]);
    const {idCategoria}= useParams()

    useEffect(() => {
        console.log(idCategoria)

        if (idCategoria) {
            bringBoards
            .then(response=> setData(response.filter(prod=>prod.categoria=== idCategoria)))
            .catch(error=>console.log(error))

        }else {
            bringBoards
            .then(response=>setData(response))
            .catch(error=>console.log(error))
        }    
    } ,[idCategoria])
    return (
        <div>
            <h1>{saludo}</h1>
            <ItemList productos={data}/>
        </div>
    )
}
export default ItemListContainer    


    