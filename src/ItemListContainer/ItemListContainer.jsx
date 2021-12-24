import React from "react";
import CartWidget from "../NavBar/CartWidget";

const ItemListContainer =(props)=>{
    const{greeting}= props
    return (
        <div>
            <h1>{greeting}</h1>
            <CartWidget></CartWidget>
        </div>
    )
}
export default ItemListContainer    