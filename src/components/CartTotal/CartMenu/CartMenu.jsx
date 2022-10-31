import React from 'react';
import { calcTotalPrice } from '../../../until.js';
import { CartItem } from '../CartItem/CartItem.jsx';
import { Link } from 'react-router-dom';
import './cartMenu.css';

export const CartMenu = ({ items }) => {
  const [isButtonClick, setIsButtonClick] = React.useState(false);
  const IsButtonClick = () => {
    setIsButtonClick(!isButtonClick);
  };

  return (
    <div className="cart-menu">
      
        
          <div className="cart-menu__game-list-container">
            <div className="cart-menu__game-list">
              {items.map((game) => (
                <CartItem game={game}  />
              ))}
            </div>
          </div>

          {items.length > 0 ? (
            <div className="cart-menu__arrenge">
              <div className="cart-menu__total-price">
                <span>Итого: </span>
                <span>{calcTotalPrice(items)} руб.</span>
              </div>
             <Link to='/order'> <button className={isButtonClick ? 'active' : 'button'} onClick={IsButtonClick}>
                Оформить заказ
              </button></Link>
            </div>
          ) : (
            'Корзина пуста'
          )}
        </div>
      
    
  );
};

export default CartMenu;
