import { useState } from "react";
import Article from "../Article/Article";

function List(props) {
  const { articles, categories } = props;
  const [selectedArticles, setSelectedArticles] = useState({});

  function updateSelected(id) {
    const clone = { ...selectedArticles };
    clone[id] = !clone[id];
    setSelectedArticles(clone);
  }

  return (
    <div>
      {articles.map((art) => (
        <Article
          article={art}
          categories={categories}
          key={art.id}
          selected={Boolean(selectedArticles[art.id])}
          updateSelected={updateSelected}
        />
      ))}
    </div>
  );
}

export default List;
