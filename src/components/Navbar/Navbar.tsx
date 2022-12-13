import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';
import { MdShoppingCart } from 'react-icons/md';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';

const Navbar = () => {
  const { cartQuantity } = useShoppingCart();
  return (
    <div className={s.navbar}>
      <nav className={s.links}>
        <NavLink className={s.link} to="/">
          GPUStore
        </NavLink>
      </nav>
      {cartQuantity > 0 && (
        <NavLink to="/cart">
          <button className={s.button}>
            <MdShoppingCart className={s.buttonIcon} />
            <p className={s.buttonAmount}>{cartQuantity}</p>
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
