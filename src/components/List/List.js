import React from "react";
import Article from "../Article/Article";

function List(props) {
  const { articles } = props;

  return (
    <div>
      {articles.map((art) => (
        <Article article={art} foo="bar" key={art.id} />
      ))}
    </div>
  );
}

export default List;
