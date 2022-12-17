import { useShoppingCart } from '../../contexts/ShoppingCartContext';
import items from '../../data/items.json';
import { formatCurrency } from '../../utils/formatCurrency';
import s from './CartItem.module.scss';

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = items.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <div className={s.cartItem}>
      <div className={s.imgContainer}>
        <img className={s.img} src={item?.imgUrl} alt="" />
      </div>
      <div className={s.leftSide}>
        <h1 className={s.leftSideHeading}>
          {item?.name}
          <span className={s.leftSideQuantity}>x{quantity}</span>
        </h1>
        <p className={s.leftSidePrice}>{formatCurrency(item?.price)}</p>
      </div>
      <div className={s.rightSide}>
        <p>{formatCurrency(item.price * quantity)}</p>
        <button
          onClick={() => removeFromCart(id)}
          className={s.rightSideButton}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default CartItem;
