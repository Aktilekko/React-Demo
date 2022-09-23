import React, { useState } from "react";
import PostList from "./components/PostList";
import "./app.scss";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description1" },
    { id: 2, title: "Javascript", body: "Description2" },
    { id: 3, title: "Javascript", body: "Description3" },
  ]);

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="app">
      <PostForm />
      <PostList posts={posts} title="Spisok Postov" />
    </div>
  );
}

export default App;
