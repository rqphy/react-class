import React from "react";
import Article from "../Article/Article";

function List(props) {
  const { articles } = props;

  return (
    <div>
      {articles.map((art) => (
        <Article article={art} foo="bar" />
      ))}
    </div>
  );
}

export default List;
