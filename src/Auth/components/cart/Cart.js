import React from 'react'
import { useSelector } from 'react-redux'
import { ShoppingCard } from '../../../ui/Card'


function Cart() {  
    const cart = useSelector((state)=> state.cart.cart)
    
    return (
    <div>{cart.map(cartItem =>{
        <ShoppingCard  imageUrl={cartItem.imageUrl} price={cartItem.price}/>
    })}</div>
  )
}


export default Cart