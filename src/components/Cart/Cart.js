import { useContext } from "react";
import CartItem from "../CartItem/CartItem";

import cartContext from "../../contexts/cart";
import setCartContext from "../../contexts/setCart";

function Cart() {
  const cart = useContext(cartContext);
  const dispatch = useContext(setCartContext);

  function updateQuantity(id, quantity) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: quantity,
        };
      }
      return item;
    });
    dispatch({ type: "updateCart", cart: newCart });
  }

  const total = cart.reduce((acc, item) => {
    return item.price * item.quantity + acc;
  }, 0);

  return (
    <div>
      {cart.map((item) => (
        <CartItem
          product={item}
          key={item.id}
          updateQuantity={updateQuantity}
        />
      ))}
      <div>{total}$</div>
    </div>
  );
}

export default Cart;
