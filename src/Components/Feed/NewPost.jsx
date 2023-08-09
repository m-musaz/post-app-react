import React, { useEffect, useState } from "react";
import PostContainer from "./PostContainer";
function NewPost({ userId }) {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    const obj = { postTitle: title, postBody: body };
    console.log(obj);
    setPosts([obj, ...posts]);
    console.log(posts);
  };

  const removePost = (postTitle) => {
    setPosts(posts.filter((post) => post.postTitle != postTitle));
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
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
            onChange={handleTitleChange}
          ></input>
          <textarea
            className="form-control post"
            rows="3"
            placeholder="What's on your mind?"
            value={body}
            onChange={handleBodyChange}
          ></textarea>
          <a
            className="btn btn-dark mb-3 mt-3"
            role="button"
            onClick={handleSubmit}
          >
            Post
          </a>
        </div>
      </div>
      {posts.length ? (
        posts?.map((post) => (
          <PostContainer
            title={post?.postTitle}
            body={post?.postBody}
            postId={null}
            userId={userId?.id}
            userloggedIn={userId}
            key={post?.postTitle}
            removePost={removePost}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default NewPost;
