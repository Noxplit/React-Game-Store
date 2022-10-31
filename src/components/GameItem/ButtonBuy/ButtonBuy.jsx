import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartItem, deleteAtCartItem } from '../../../Redux/Cart/cartSlice'

const styleButton = {
  button: 'px-[40px] py-2 bg-[#e58d27] rounded-2xl text-black hover:scale-105 ease-in duration-300',
  active: 'px-[30px] py-2 bg-[#313033] rounded-2xl text-white hover:scale-105 ease-in duration-300'
}
// isItemsInCart - возращает true/false в зависимости от наличие элементов в массиве
//handleClick - добавляет или удаляет элементы из карзины

export default function ButtonBuy({game}) {
const items = useSelector(state => state.cartSlice.itemsInCart)
const isItemsInCart = items.some(item => item.id === game.id )
  const dispatch = useDispatch()
  const handleClick = () => {
if(isItemsInCart){
  dispatch(deleteAtCartItem(game.id))
} else {
  dispatch(addToCartItem(game))
}


  }
  return (
    <div>
    <button className={isItemsInCart ? styleButton.active : styleButton.button }  onClick={handleClick}>{isItemsInCart ? 'Cancel' : 'Buy'}</button>
    </div>
  )
}
