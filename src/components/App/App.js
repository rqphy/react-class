import { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import List from "../List/List";
import Resize from "../Resize/Resize";
import Title from "../Title/Title";

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
  const [title, setTitle] = useState("toto");

  function handleClick() {
    setTitle("tata");
  }

  useEffect(() => {
    fetch("http://localhost:3001/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <Title title={title} />
      <button onClick={handleClick}>Change title</button>
      <Resize />
      <List articles={articles} />
      <CartItem item={items[0]} />
    </div>
  );
}

export default App;
