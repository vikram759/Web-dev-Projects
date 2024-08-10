"use client"
import { SessionProvider } from "next-auth/react"
import { createContext } from "react";

import { useState,useEffect } from "react";

export const CartContext=createContext({})




const SessionWrapper = ({children}) => {
  
const [cartProducts, setcartProducts] = useState([])

const ls=typeof window!=='undefined'?window.localStorage:null;

useEffect(() => {
 if(ls&&ls.getItem('cart')){
  setcartProducts(JSON.parse(ls.getItem('cart')))
 }

  
}, [])

function clearCart(){
 setcartProducts([]);
 saveCartProductsToStorage([]);
}

function removeCartProduct(indexx){
  setcartProducts(prev=>{
    const newp=prev.filter((v,index)=>index!=indexx);
    saveCartProductsToStorage(newp);
    return newp;
  })
}

function saveCartProductsToStorage(cartProducts){

  if(ls){
    ls.setItem('cart', JSON.stringify(cartProducts))
  }
}
function addToCart(product,size=null,extra=[]){
  setcartProducts(prevProducts=>{
   const cartProduct={...product,size,extra}
   const newProducts=[...prevProducts,cartProduct];

   saveCartProductsToStorage(newProducts)

   return newProducts;

  })
  console.log(cartProducts);
}

  
  return (
    
    <SessionProvider>
      <CartContext.Provider value={{cartProducts,setcartProducts,addToCart,removeCartProduct,clearCart}}>

      {children} 
      </CartContext.Provider>
      </SessionProvider>
  );
}

export default SessionWrapper;