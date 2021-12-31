import React from "react";
import ItemList from "../ItemList/ItemList";
// import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer =(props)=>{
    const greeting= "Bienvenido a mi tienda"
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList></ItemList>
        </div>
    )
}
export default ItemListContainer    