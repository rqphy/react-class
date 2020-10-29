import { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import List from "../List/List";
import Resize from "../Resize/Resize";
import Title from "../Title/Title";
import useArticles from "../../hooks/useArticles/useArticles";
import useCategories from "../../hooks/useCategories/useCategories";
import Filters from "../filters/filters";

function App() {
  const articles = useArticles();
  const categories = useCategories();
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
  const [title, setTitle] = useState("toto");

  function handleClick() {
    setTitle("tata");
  }

  const [titleFilter, setTitleFilter] = useState("foo");

  function handleChange(e) {
    setTitleFilter(e.target.value);
  }

  return (
    <div>
      <Title title={title} />
      <button onClick={handleClick}>Change title</button>
      <Resize />
      <Filters title={titleFilter} handleChange={handleChange} />
      <List articles={articles} categories={categories} />
      <CartItem item={items[0]} />
    </div>
  );
}

export default App;
