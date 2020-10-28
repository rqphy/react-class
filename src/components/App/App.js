import React from "react";
import List from "../List/List";

function App() {
  const articles = [
    {
      id: 1,
      title: "Article 1",
      category: "News",
      published: true,
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 1,
      title: "Article 2",
      category: "News",
      published: false,
      content: "budumbudm testest",
    },
    {
      id: 1,
      title: "Article 3",
      category: "Blog",
      published: true,
      content: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <div>
      <List articles={articles} />
    </div>
  );
}

export default App;
