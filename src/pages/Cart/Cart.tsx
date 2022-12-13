import CartItem from '../../components/CartItem/CartItem';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';
import s from './Cart.module.scss';

const Cart = () => {
  const { cartItems } = useShoppingCart();
  return (
    <div className={s.cart}>
      {cartItems.map((item) => {
        return <CartItem {...item} />;
      })}
    </div>
  );
};

export default Cart;
