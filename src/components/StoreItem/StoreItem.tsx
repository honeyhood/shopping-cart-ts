import { ShoppingCartItem } from '../../@types/ShoppingCartItem';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import s from './StoreItem.module.scss';

const ItemCart = ({ id, name, price, imgUrl }: ShoppingCartItem) => {
  const {
    getItemQuantity,
    incrementCartQuantity,
    decrementCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className={s.itemCart}>
      <img className={s.img} src={imgUrl} alt="GPU" />
      <div className={s.heading}>
        <h1 className={s.name}>{name}</h1>
        <div className={s.price}>{formatCurrency(price)}$</div>
      </div>
      {quantity === 0 ? (
        <button
          onClick={() => incrementCartQuantity(id)}
          className={s.addButton}
        >
          Add to cart
        </button>
      ) : (
        <div className={s.footer}>
          <div className={s.footerLogic}>
            <button
              onClick={() => decrementCartQuantity(id)}
              className={s.logicButton}
            >
              -
            </button>
            <div>
              <p className={s.quantity}>
                <span>{quantity}</span> in cart
              </p>
            </div>
            <button
              onClick={() => incrementCartQuantity(id)}
              className={s.logicButton}
            >
              +
            </button>
          </div>
          <button onClick={() => removeFromCart(id)} className={s.deleteButton}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCart;
