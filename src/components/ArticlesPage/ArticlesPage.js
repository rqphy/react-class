import { useState } from "react";
import { Link } from "react-router-dom";

import { deleteArticle } from "../../services/articles/articles";

import List from "../List/List";
import Resize from "../Resize/Resize";
import Title from "../Title/Title";
import useArticles from "../../hooks/useArticles/useArticles";
import useCategories from "../../hooks/useCategories/useCategories";
import Filters from "../Filters/Filters";
import Container from "../Container/Container";
import Cart from "../Cart/Cart";

function ArticlesPage() {
  const [articles, setArticles] = useArticles();
  const categories = useCategories();

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

  function handleArticleDeleted(id) {
    deleteArticle(id).then(() => {
      const data = articles.filter((article) => article.id !== id);
      setArticles(data);
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
      <Link to="/article">Add new article</Link>
      <button onClick={handleClick}>Change title</button>
      <Resize />
      <Container>
        <Filters
          categories={categories}
          category={filters.category}
          title={filters.title}
          handleFilterChange={handleFilterChange}
          published={filters.published}
        />
        <List
          articles={filteredArticles}
          categories={categories}
          deleteArticle={handleArticleDeleted}
        />
      </Container>
      <Cart />
    </div>
  );
}

export default ArticlesPage;
