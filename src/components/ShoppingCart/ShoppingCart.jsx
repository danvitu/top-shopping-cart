import PropTypes from "prop-types";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = ({ inCartItems, setInCartItems }) => {
  const checkout = () => {
    alert(`Success! Goodbye! Have a nice day!`);
    setInCartItems([]);
  };

  let totalPrice = 0;
  inCartItems.forEach((item) => {
    totalPrice = totalPrice + parseInt(item.quantity) * parseInt(item.price);
  });

  const cartItems = inCartItems.map((item) => (
    <div key={item.id} className={styles.itemInCart}>
      <span className={styles.imgContainer}>
        <img src={item.image} alt="" />
      </span>
      <span>{item.name}</span>
      <span>{item.quantity}</span>
      <span>{item.price} $</span>
      <button
        onClick={() => {
          setInCartItems(
            inCartItems.filter(element => element.id !== item.id),
          );
        }}
      >
        X
      </button>
    </div>
  ));

  return (
    <div>
      <h2>Shopping cart</h2>
      <div className={styles.cart}>{cartItems}</div>
      <p>Total price is: {totalPrice} $</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

ShoppingCart.propTypes = {
  inCartItems: PropTypes.array,
  setInCartItems: PropTypes.func,
};

export default ShoppingCart;
