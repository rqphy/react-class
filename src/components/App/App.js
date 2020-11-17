import { useState, useReducer } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import categoriesContext from "../../contexts/categories";
import cartContext from "../../contexts/cart";
import setCartContext from "../../contexts/setCart";

import useCategories from "../../hooks/useCategories/useCategories";

import ArticlesPage from "../ArticlesPage/ArticlesPage";
import ArticlePage from "../ArticlePage/ArticlePage";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import TicTacToe from "../TicTacToe/TicTacToe";
import Timer from "../Timer/Timer";

function App() {
  // const [cart, setCart] = useState([
  //   {
  //     id: 1,
  //     price: 12,
  //     name: "pizza",
  //     quantity: 0,
  //   },
  //   {
  //     id: 2,
  //     price: 200,
  //     name: "phone",
  //     quantity: 3,
  //   },
  //   {
  //     id: 3,
  //     price: 25,
  //     name: "hello",
  //     quantity: 0,
  //   },
  // ]);

  const [cart, dispatch] = useReducer(reducer, [
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

  function reducer(state, action) {
    switch (action.type) {
      case "updateCart":
        return action.cart;

      default:
        return state;
    }
  }
  const categories = useCategories();

  return (
    <categoriesContext.Provider value={categories}>
      <cartContext.Provider value={cart}>
        <setCartContext.Provider value={dispatch}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={ArticlesPage} />
              <Route exact path="/article" component={ArticlePage} />
              <Route exact path="/article/:id" component={ArticlePage} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/tic" component={TicTacToe} />
              <Route exact path="/timer" component={Timer} />
              <Route component={() => "Error 404"} />
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
        </setCartContext.Provider>
      </cartContext.Provider>
    </categoriesContext.Provider>
  );
}
export default App;
