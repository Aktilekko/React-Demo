import React from "react";
import "./postItems.scss";

function Posts(props) {
  return (
    <div className="posts">
      <div className="posts__content">
        <strong>
          {props.number}.{props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Posts;
