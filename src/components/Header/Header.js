import { useContext } from "react";

import cartContext from "../../contexts/cart";

import { Link } from "react-router-dom";
import src from "../../logo.svg";
import "./Header.css";

function Header() {
  const cart = useContext(cartContext);

  const total = cart.reduce((acc, item) => {
    return item.price * item.quantity + acc;
  }, 0);

  return (
    <div className="Header">
      <Link to="/">
        <img src={src} alt="logo" width="100" />
      </Link>
      <p>{total}</p>
    </div>
  );
}

export default Header;
