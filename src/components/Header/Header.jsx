import { Link } from "react-router-dom";

import Logo from "./Logo";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

const Header = ({ sumItems, setShowCart, showCart }) => {
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <div className={styles.header}>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.showCart}>
        <Link to={"/shop"}>
          <div className={styles.cartIconContainer}>
            <img
              onClick={toggleCart}
              src="src/assets/icons8-cart-50.png"
              alt=""
            />
          </div>
        </Link>
        <p className={styles.itemsInCart}>{sumItems}</p>
      </div>
    </div>
  );
};

Header.propTypes = {
  sumItems: PropTypes.number,
  setShowCart: PropTypes.func,
  showCart: PropTypes.bool,
};

export default Header;
