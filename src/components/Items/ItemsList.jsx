import Item from "./Item";
import { useEffect, useState } from "react";
import styles from "./ItemsList.module.css";
import PropTypes from "prop-types";

const ItemsList = ({ setInCartItems, inCartItems }) => {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    const fetchFromFakeStore = async () => {
      const data = await fetch("https://fakestoreapi.com/products?limit=12");
      const itemsData = await data.json();
      setStoreData(itemsData);
    };
    fetchFromFakeStore();
  }, []);
  return (
    <div>
      <div className={styles.itemsGrid}>
        {storeData.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            setInCartItems={setInCartItems}
            inCartItems={inCartItems}
          />
        ))}
      </div>
    </div>
  );
};

ItemsList.propTypes = {
  setInCartItems: PropTypes.func,
  inCartItems: PropTypes.array,
};

export default ItemsList;
