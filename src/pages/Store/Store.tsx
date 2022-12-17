import s from './Store.module.scss';
import storeItems from '../../data/items.json';
import StoreItem from '../../components/StoreItem/StoreItem';

const Store = () => {
  return (
    <div className={s.storeWrapper}>
      <div className={s.store}>
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Store;
