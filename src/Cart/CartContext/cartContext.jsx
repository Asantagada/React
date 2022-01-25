import React from 'react'
import { useState, useContext, createContext } from 'react'


const cartContext = createContext([]);

export function useCartContext(){
    return useContext(cartContext)
}

export const CartContextProvider = ({children})=>{
    const [cartList, setCartList]= useState([])

    function agregarAlCarrito(items){
        const indice =cartList.findIndex(i=>i.id === items.id)
        if (indice> -1){
            const oldQuantity =cartList[indice].cantidad
            let newQuantity = oldQuantity+ items.cantidad
            cartList[indice].cantidad= newQuantity
            let arrAux=[...cartList]
            setCartList(arrAux)
        }else{
            setCartList([...cartList, items])
        }
    }
    function vaciarCarrito(){
        setCartList([])
    }
    return (
        <cartContext.Provider value={{cartList, agregarAlCarrito, vaciarCarrito}}>
            {children}
        </cartContext.Provider>
    )
}
export default cartContext


