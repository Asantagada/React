import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer =(props)=>{
    const{greeting}= props;

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock="6" initial="1" />
        </div>
    )
}
export default ItemListContainer    