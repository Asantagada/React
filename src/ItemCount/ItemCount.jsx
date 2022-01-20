import React from 'react'
import { useState } from 'react';

function ItemCount({initial, stock, onAdd}) {
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
    return (
        <div>
            <button onClick={substractCount}>-</button>
            {count}
            <button onClick ={addCount}>+</button>
            <br/>
            <button onClick={()=>onAdd(count)}>Agregar Al Carrito</button>
        </div>
    )
}

export default ItemCount

