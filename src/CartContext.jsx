import { useContext,createContext, useState } from "react";

const CartContext =createContext()
export const useCart=()=>useContext(CartContext)
export const CartProvider=
({children})=>{
    const [cart,setCart]=useState(0)
    return(
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext