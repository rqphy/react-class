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
  const [categories, setCategories] = useState([]);

  function handleClick() {
    setTitle("tata");
  }

  useEffect(() => {
    fetch("http://localhost:3001/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <Title title={title} />
      <button onClick={handleClick}>Change title</button>
      <Resize />
      <List articles={articles} categories={categories} />
      <CartItem item={items[0]} />
    </div>
  );
}

export default App;
