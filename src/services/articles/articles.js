export function getArticles() {
  return fetch("http://localhost:3001/articles").then((res) => res.json());
}

export function getArticle(id) {
  return fetch("http://localhost:3001/articles/" + id).then((res) =>
    res.json()
  );
}

export function createArticle(article) {
  return fetch("http://localhost:3001/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...article,
      category: Number(article.category),
    }),
  }).then((res) => res.json());
}

export function updateArticle(article) {
  return fetch("http://localhost:3001/articles/" + article.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...article,
      category: Number(article.category),
    }),
  }).then((res) => res.json());
}
