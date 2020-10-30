import { useState } from "react";
import "./Article.css";
import classnames from "classnames";
import { Link } from "react-router-dom";

function Article(props) {
  const { article, categories } = props;
  const { category: categoryId, published, title } = article;
  const [selected, setSelected] = useState(false);

  // console.log(category, categories);

  const category = categories.find((cat) => cat.id === categoryId);
  // console.log(category);

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
