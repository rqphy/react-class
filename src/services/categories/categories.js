export function getCategories() {
  return fetch("http://localhost:3001/categories").then((res) => res.json());
}
export function getcategory(id) {
  return fetch("http://localhost:3001/categories/" + id).then((res) =>
    res.json()
  );
}
