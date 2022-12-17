import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';
import s from './Cart.module.scss';
import storeItems from '../../data/items.json';
import { formatCurrency } from '../../utils/formatCurrency';

const Cart = () => {
  const { cartItems } = useShoppingCart();
  const navigate = useNavigate();
  const total = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((storeItem) => storeItem.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/');
    }
  }, [cartItems]);

  return (
    <>
      <div className={s.cartItems}>
        {cartItems.map((item) => {
          return <CartItem {...item} />;
        })}
      </div>
      <div className={s.cartFooter}>
        {cartItems.length > 0 && (
          <NavLink to="/">
            <button className={s.backButton}>Back</button>
          </NavLink>
        )}
        <p className={s.total}>Total: {formatCurrency(total)}</p>
      </div>
    </>
  );
};

export default Cart;
