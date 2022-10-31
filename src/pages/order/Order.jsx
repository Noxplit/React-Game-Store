import React from 'react'
import Header from '../../components/Header'
import { calcTotalPrice } from '../../until'
import { OrderItems } from '../../components/OrderItems/OrderItems'
import { useSelector } from 'react-redux'
import './order.css'

export const Order = () => {
  const game = useSelector(state => state.cartSlice.itemsInCart)
  const totalPrice = calcTotalPrice(game)
  return (

    <div><Header/>
    { game.length > 0 ?  <div>
     {game.map((game) => (
      <OrderItems game={game} key={game.id} />
     ))}
     <div className='cart-order-total'>
         <div className='cart-order__total-games'> Общее количество игр {game.length} </div>
    <div className='cart-order__total-price'> Итоговая сумма: {totalPrice} руб.</div>
    </div></div> : <div className='cart-clear' >Корзина пуста</div>}
    
    </div>
  
  )
}
