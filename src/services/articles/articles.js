export function getArticles() {
  return fetch('http://localhost:3001/articles')
    .then(res => res.json());
}
export function getArticle(id) {
  return fetch('http://localhost:3001/articles/' + id)
    .then(res => res.json());
}