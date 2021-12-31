import React from 'react'
import { useState } from 'react';

function ItemCount({initial, stock}) {
    const [count, setCount] = useState(initial);

    const addCount=(stock)=>{
        if(count<=stock){
            setCount(parseInt(count)+1)
        }else{
            console.log("No contamos con esa cantidad")
        }
    }
    const substractCount=()=>{
        if(count<initial){
            setCount(count-1)
        }else{
            console.log("No hay menos")
        }
    }    
    const onAdd=()=>{
        console.log(`Se agregaron ${count} items al carrito`)
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
