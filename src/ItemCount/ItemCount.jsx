import React from 'react'
import { useState } from 'react';

function ItemCount({initial, stock}) {
    const [count, setCount] = useState(initial);

    const addCount = () => {
        if ((count < stock ) && (stock !== 0)) {
            setCount(parseInt(count) + 1);
        }
    };  
    const substractCount=()=>{
        if (count !== 1) {
            setCount(parseInt(count) - 1); 
        }else{
            console.log("No hay menos")
        }
    }    
    const onAdd = (stock, count) => {
        if ((count <= stock) && (count = 1)) {
            console.log(`Agregaste`+ count + `producto al carrito`);
        } else if ((count <= stock) && (count > 1)) {
        console.log(`Agregaste`+ count + `productos al carrito`);
        } else {
        console.log( "No hay" + count + "disponibles, intentá una cantidad menor");
        }
    }

    return (
        <div>
            <button onClick={substractCount}>-</button>
            {count}
            <button onClick ={addCount}>+</button>
            <br/>
            <button onClick={onAdd}>Agregar Al Carrito</button>
        </div>
    )
}

export default ItemCount

