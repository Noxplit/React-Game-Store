import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAtCartItem } from '../../Redux/Cart/cartSlice'

import './orderItems.css'

export const OrderItems = ({game}) => {
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
    <div className='cart-order'>
    <div className='cart-order__image' style={{backgroundImage: `url(${game.image})`}}/>
    <div className="cart-order__title">{game.title} </div>
 
          <div className="cart-order__price">
      {game.price} руб.
      </div>
      
      <button className="cart-order__clear" onClick={handleClick}>
      X
      </button>
     
    </div>

        </div>
        
  )
}
