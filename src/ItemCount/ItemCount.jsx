import React from 'react'
import { useState } from 'react';
import {useEffect} from 'react'

function ItemCount({stock, initial}) {
    const [count, setCount] = useState(initial);  
    const addCount=()=>{
        setCount(parseInt(count) + 1)
    }
    const substractCount=()=>{
        setCount(count-1)
    }

    
    let onAdd=()=>{}
    
    useEffect(()=>{
        onAdd=(stock,count)=>{
            if(count<=stock){
                console.log('Elegiste '+ count + " productos")
            }
            else{
                console.log("No tenemos esa cantidad")
            }
        }
    })
    return (
        <div>
            <button onClick={substractCount}>-</button>
            {count}
            <button onClick ={addCount}>+</button>
            <br/>
            <button onClick={onAdd(stock,count)}>Agregar Al Carrito</button>
        </div>
    )
}

export default ItemCount
