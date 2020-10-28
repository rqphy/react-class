import { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import List from "../List/List";
import Resize from "../Resize/Resize";

function App() {
  const items = [
    {
      id: 1,
      price: 12,
      name: "pizza",
    },
    {
      id: 2,
      price: 200,
      name: "phone",
    },
    {
      id: 3,
      price: 25,
      name: "hello",
    },
  ];
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <Resize />
      <List articles={articles} />
      <CartItem item={items[0]} />
    </div>
  );
}

export default App;
