import s from './Store.module.scss';
import items from '../../data/items.json';
import ItemCart from '../../components/StoreItem/StoreItem';

const Store = () => {
  return (
    <div className={s.storeWrapper}>
      <div className={s.store}>
        {items.map((item) => (
          <ItemCart key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Store;
