import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  createArticle,
  getArticle,
  updateArticle,
} from "../../services/articles/articles";
import useCategories from "../../hooks/useCategories/useCategories";

import Title from "../Title/Title";

function ArticlePage(props) {
  const id = props.match.params.id;

  const [article, setArticle] = useState({
    category: "",
    title: "",
  });
  const history = useHistory();
  const categories = useCategories();

  useEffect(() => {
    if (id) {
      getArticle(id).then((data) => setArticle(data));
    }
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    if (id) {
      updateArticle(article).then(() => history.push("/"));
    } else {
      createArticle(article).then(() => history.push("/"));
    }
  }

  function handleChange(event) {
    setArticle({
      ...article,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <Title title={id ? `Edit article ${id}` : "Add article"} />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Titre:
            <input
              name="title"
              type="text"
              value={article.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Category:
            <select
              name="category"
              value={article.category}
              onChange={handleChange}
            >
              <option value=""></option>
              {categories.map((cat) => (
                <option value={cat.id} key={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </label>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default ArticlePage;

// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import Title from "../../components/Title/Title";
// import { createArticle } from "../../services/articles/articles";
// import { Link } from "react-router-dom";

// function ArticlePage() {
//   const [article, setArticle] = useState({
//     title: "",
//   });
//   const history = useHistory();

//   function handleChange(e) {
//     setArticle({
//       ...article,
//       [e.target.name]: e.target.value,
//     });
//   }

// function handleChange(event) {
//   setArticle({
//     ...article,
//     [event.target.name]: event.target.value,
//   });
// }

//   function handleSubmit(e) {
//     e.preventDefault();
//     createArticle(article).then(() => history.push("/"));
//   }

//   return (
//     <div>
//       <Title title="Article" />
//       <Link to="/">Home</Link>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <input
//             type="text"
//             value={article.title}
//             id="title"
//             onChange={handleChange}
//           />
//         </label>
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default ArticlePage;
