import { useState } from "react";
import CartItem from "../CartItem/CartItem";
import List from "../List/List";
import Resize from "../Resize/Resize";
import Title from "../Title/Title";
import useArticles from "../../hooks/useArticles/useArticles";
import useCategories from "../../hooks/useCategories/useCategories";
import Filters from "../Filters/Filters";

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

  const [filters, setFilters] = useState({
    title: "",
    category: "",
    published: "",
  });

  function handleFilterChange(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  }

  const filteredArticles = articles
    .filter((art) => art.title.includes(filters.title))
    .filter(
      (art) =>
        filters.category === "" || art.category === Number(filters.category)
    )
    .filter(
      (art) =>
        filters.published === "" ||
        (art.published === true && filters.published === "published") ||
        (art.published === false && filters.published === "draft")
    );

  return (
    <div>
      <Title title={title} />
      <button onClick={handleClick}>Change title</button>
      <Resize />
      <Filters
        categories={categories}
        category={filters.category}
        title={filters.title}
        handleFilterChange={handleFilterChange}
        published={filters.published}
      />
      <List articles={filteredArticles} categories={categories} />
      <CartItem item={items[0]} />
    </div>
  );
}

export default App;
