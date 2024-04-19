import styles from "./Item.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Item = ({ id, title, price, image, setInCartItems, inCartItems }) => {
  const [itemQuantity, setItemQuantity] = useState(0);

  const addNewItem = () => {
    if (itemQuantity === 0) return;
    setInCartItems([
      ...inCartItems,
      {
        id: id,
        image: image,
        name: title,
        quantity: itemQuantity,
        price: price,
      },
    ]);

    // const newItems = inCartItems.map((item) => {
    //   if (item.id === id) {
    //     return {
    //       ...item,
    //       quantity: itemQuantity,
    //     };
    //   } else {
    //     return item;
    //   }
    // });
    // setInCartItems(newItems);
  };

  return (
    <div className={styles.item}>
      <div className={styles.imgAndTitle}>
        <div className={styles.itemImgWraper}>
          <img className={styles.imgItem} src={image} alt={title} />
        </div>
        <p>{title}</p>
      </div>
      <div className={styles.priceAndInput}>
        <p>{price} $</p>
        <div className={styles.countBtn}>
          <input
            className={styles.inputCount}
            type="number"
            min="0"
            name="count"
            id="count"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          ></input>
          <button onClick={addNewItem}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  setInCartItems: PropTypes.func,
  inCartItems: PropTypes.array,
  addNewItem: PropTypes.func,
};

export default Item;
