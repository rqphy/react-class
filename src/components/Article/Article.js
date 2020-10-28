import { useState } from "react";
import "./Article.css";
import classnames from "classnames";

function Article(props) {
  const { article, foo } = props;
  const { category, published, title } = article;
  const [selected, setSelected] = useState(false);
  console.log(selected);

  function handleClick() {
    console.log("click", article.id);
    setSelected(!selected);
  }

  return (
    <div
      className={classnames("Article", { "Article--selected": selected })}
      onClick={handleClick}
    >
      <div className="title">{title}</div>
      <div>{category}</div>
      <div>{published ? "Published" : "Draft"}</div>
      <div>{foo}</div>
    </div>
  );
}

Article.defaultProps = {
  article: {},
  foo: "bar",
};

export default Article;
