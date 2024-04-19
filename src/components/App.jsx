import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header/Header";

function App() {
  const [inCartItems, setInCartItems] = useState([]);
  const [showCart, setShowCart] = useState(true);
  let sumItems = 0;
  inCartItems.forEach((item) => {
    sumItems = sumItems + parseInt(item.quantity);
  });

  return (
    <>
      <Header sumItems={sumItems} setShowCart={setShowCart} showCart={showCart} />
      <Outlet
        context={{
          inCartItems: [inCartItems, setInCartItems],
          showCart: showCart,
        }}
      />
    </>
  );
}

export default App;
