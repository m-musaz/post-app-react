import React, { useEffect, useState } from "react";
import PostContainer from "./PostContainer";
function NewPost({ userId }) {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    const obj = { postTitle: title, postBody: body };
    setPosts([...posts, obj]);
  };

  const removePost = (posttitle) => {
    console.log(posts);
    setPosts(posts.filter((post) => post.postTitle != posttitle));
  };

  return (
    <div className="row mt-5">
      <div className="card mx-0">
        <h5
          className="card-header"
          style={{ marginLeft: "-12px", marginRight: "-12px" }}
        >
          Write a Post
        </h5>
        <div className="card-body">
          <input
            className="form-control mb-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <textarea
            className="form-control post"
            rows="3"
            placeholder="What's on your mind?"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <a
            className="btn btn-primary mb-3 mt-3"
            role="button"
            onClick={handleSubmit}
          >
            Post
          </a>
        </div>
      </div>
      {posts.length != 0
        ? posts?.map((post) => (
            <PostContainer
              title={post?.postTitle}
              body={post?.postBody}
              postId={null}
              userId={userId}
              key={post?.postTitle}
            />
          ))
        : undefined}
    </div>
  );
}

export default NewPost;
