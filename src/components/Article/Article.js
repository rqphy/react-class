import React from "react";
import "./Article.css";

function Article(props) {
  const { article, foo } = props;
  const { category, published, title } = article;

  return (
    <div className="Article">
      <div className="title">{title}</div>
      <div>{category}</div>
      <div>{published ? "Published" : "Draft"}</div>
      <div>{foo}</div>
    </div>
  );
}

export default Article;
