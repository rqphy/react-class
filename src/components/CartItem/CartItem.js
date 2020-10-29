import "./CartItem.css";

function CartItem(props) {
  const { product, updateQuantity } = props;
  const { id, name, price, quantity } = product;
  const total = quantity * price;

  function handleMinus() {
    if (quantity > 0) {
      updateQuantity(id, quantity - 1);
    }
  }

  function handlePlus() {
    updateQuantity(id, quantity + 1);
  }

  return (
    <div className="item">
      <div>{name}</div>
      <div className="counter">
        <div>{quantity}</div>
        <div className="counter__button" onClick={handlePlus}>
          +
        </div>
        <div className="counter__button" onClick={handleMinus}>
          -
        </div>
      </div>
      <div>Total : {total}</div>
    </div>
  );
}

export default CartItem;
