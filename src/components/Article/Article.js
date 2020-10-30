import { useState } from "react";
import "./Article.css";
import classnames from "classnames";
import { Link } from "react-router-dom";

function Article(props) {
  const { article, categories, updateSelected, selected } = props;
  const { category: categoryId, published, title, id } = article;

  const category = categories.find((cat) => cat.id === categoryId);

  function handleClick() {
    updateSelected(id);
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
    </div>
  );
}

Article.defaultProps = {
  article: {},
  foo: "bar",
};

export default Article;
