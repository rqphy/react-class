import "./CartItem.css";
import { useState } from "react";

function CartItem(props) {
  const { item } = props;
  const { name, price } = item;
  let [counter, setCounter] = useState(1);
  let [total, setTotal] = useState(price);

  function editTotal() {
    setTotal((total = price * counter));
  }

  function editQuantity(value) {
    if (value === "add") {
      setCounter(++counter);
      editTotal();
    } else if (value === "remove" && counter > 0) {
      setCounter(--counter);
      editTotal();
    }
  }

  return (
    <div className="item">
      <div>{name}</div>
      <div className="counter">
        <div>{counter}</div>
        <div
          className="counter__button"
          onClick={() => {
            editQuantity("add");
          }}
        >
          +
        </div>
        <div
          className="counter__button"
          onClick={() => {
            editQuantity("remove");
          }}
        >
          -
        </div>
      </div>
      <div>Total : {total}</div>
    </div>
  );
}

export default CartItem;
