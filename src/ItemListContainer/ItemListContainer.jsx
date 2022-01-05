import React, {useState, useEffect} from "react";
import {bringBoards} from "../ItemList/products";
import ItemList from "../ItemList/ItemList";

const ItemListContainer =({saludo})=>{
    const [data, setData]=useState([]);
    useEffect(() => {
        bringBoards
        .then((response)=>{
            setData(response)
        })
        .catch((error)=>{
            console.log(error)
        })    
    },[])

    return (
        <div>
            <h1>{saludo}</h1>
            <ItemList productos={data}/>
        </div>
    )
}
export default ItemListContainer    