import { useEffect, useState } from "react";

function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return categories;
}

export default useCategories;
