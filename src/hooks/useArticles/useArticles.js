import { useEffect, useState } from "react";

function useArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  return articles;
}

export default useArticles;
