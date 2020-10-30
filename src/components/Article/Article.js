import classnames from "classnames";
import { Link } from "react-router-dom";

import "./Article.css";

function Article(props) {
  const {
    article,
    categories,
    updateSelected,
    selected,
    deleteArticle,
  } = props;
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
