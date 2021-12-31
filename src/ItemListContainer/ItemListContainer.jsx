import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer =(props)=>{
    const{greeting}= props;

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount initial="1" stock="7" />
        </div>
    )
}
export default ItemListContainer    