import React from "react";
import "./Post.css";

function Post(props) {
  const { title, message } = props;

  return (
    <div className="post">
      <p className="post-title">
        <h3>{title}</h3>
      </p>
      <p className="post-message">{message}</p>
    </div>
  );
}

export default Post;
