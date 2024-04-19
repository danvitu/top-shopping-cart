import ItemsList from "../Items/ItemsList";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useOutletContext } from "react-router-dom";

const ShopContent = () => {
  const {
    inCartItems: [inCartItems, setInCartItems],
  } = useOutletContext();
  const { showCart } = useOutletContext();
  console.log(inCartItems);
  return (
    <div>
      {showCart && (
        <>
          <hr />
          <ShoppingCart
            inCartItems={inCartItems}
            setInCartItems={setInCartItems}
          />
          <hr />
        </>
      )}

      <h2>Choose our products</h2>
      <ItemsList setInCartItems={setInCartItems} inCartItems={inCartItems} />
    </div>
  );
};

export default ShopContent;
