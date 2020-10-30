import classnames from "classnames";
import { useContext } from "react";
import { Link } from "react-router-dom";

import categoriesContext from "../../contexts/categories";

import "./Article.css";

function Article(props) {
  const { article, updateSelected, selected, deleteArticle } = props;

  const categories = useContext(categoriesContext);
  const { category: categoryId, published, title } = article;

  const category = categories.find((cat) => cat.id === categoryId);

  function handleDelete(e) {
    e.stopPropagation();
    deleteArticle(article.id);
  }

  function handleClick() {
    updateSelected(article.id);
  }

  return (
    <div
      className={classnames("Article", { "Article--selected": selected })}
      onClick={handleClick}
    >
      <div className="title">{title}</div>
      <div>{category ? category.title : categoryId}</div>
      <div>{published ? "Published" : "Draft"}</div>
      <Link to={"/article/" + article.id}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

Article.defaultProps = {
  article: {},
  foo: "bar",
};

export default Article;
