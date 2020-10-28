import React from "react";
import CartItem from "../CartItem/CartItem";
import List from "../List/List";

function App() {
  const items = [
    {
      id: 1,
      price: 12,
      name: "pizza",
    },
    {
      id: 2,
      price: 200,
      name: "phone",
    },
    {
      id: 3,
      price: 25,
      name: "hello",
    },
  ];
  const articles = [
    {
      id: 1,
      title: "Article 1",
      category: "News",
      published: true,
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      title: "Article 2",
      category: "News",
      published: false,
      content: "budumbudm testest",
    },
    {
      id: 3,
      title: "Article 3",
      category: "Blog",
      published: true,
      content: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <div>
      <List articles={articles} />
      <CartItem item={items[0]} />
    </div>
  );
}

export default App;
