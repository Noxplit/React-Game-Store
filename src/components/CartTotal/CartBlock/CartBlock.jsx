import React from 'react';
import CartMenu from '../CartMenu/CartMenu.jsx'
import './cartBlock.css';
import { useSelector } from 'react-redux';
import {AiOutlineShopping} from 'react-icons/ai';

// isCartMenuVisible - включение и выключение корзины
// CartMenuVisible - функция включения и выключения корзины
// totalPrice - высчитывание общей суммы из добавленой цены в корзине
// BiDesktop - компонент иконки
//  CartMenu - компонент корзины с добавленными товарами

export const CartBlock = ({setIsCartMenuVisible, isCartMenuVisible}) => {


  const items = useSelector(state => state.cartSlice.itemsInCart)

const CartMenuVisible = () => {
  setIsCartMenuVisible(true)
}

  return (
    <>
    <div className='flex justify-center items-center cursor-pointer hover:scale-105 ease-in duration-300'>
      <AiOutlineShopping onClick={CartMenuVisible} size={30} />
      <div>{items.length}</div>
    </div>
      <CartMenu  isCartMenuVisible={isCartMenuVisible}   setIsCartMenuVisible={setIsCartMenuVisible} items={items} />
      </>
  );
}
