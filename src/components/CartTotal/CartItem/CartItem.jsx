import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  deleteAtCartItem } from '../../../Redux/Cart/cartSlice'
import './cartItem.css'


export const CartItem = ({game}) => {
  const items = useSelector(state => state.cartSlice.itemsInCart)
const isItemsInCart = items.some(item => item.id === game.id )
  const dispatch = useDispatch()
  const handleClick = () => {
if(isItemsInCart){
  dispatch(deleteAtCartItem(game.id))

}
  }

  return (
    <div>
<div className='cart-title'>
<div className="cart-title__id">{game.id}. </div>
<div className="cart-title__title">{game.title} </div>
<div className='cart-title__image' style={{backgroundImage: `url(${game.image})`}}/>
      <div className="cart-title__price">
  {game.price} руб.
  </div>
      <button className="cart-title__clear" onClick={handleClick}>
  X
  </button>
      
</div>
    </div>
  )
}
