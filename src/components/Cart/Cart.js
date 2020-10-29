import { useState } from "react";
import CartItem from "../CartItem/CartItem";

function Cart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      price: 12,
      name: "pizza",
      quantity: 0,
    },
    {
      id: 2,
      price: 200,
      name: "phone",
      quantity: 3,
    },
    {
      id: 3,
      price: 25,
      name: "hello",
      quantity: 0,
    },
  ]);

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
    setCart(newCart);
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
