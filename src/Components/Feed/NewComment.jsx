import React, { useEffect, useState } from "react";
import PostContainer from "./PostContainer";
import UserComment from "./Comment";
function NewComment({ userloggedIn }) {
  const [comments, setcomments] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    const obj = { commentTitle: title, commentBody: body };
    setcomments([obj, ...comments]);
  };

  const removePost = (posttitle) => {
    setcomments(comments.filter((post) => post.postTitle != posttitle));
  };

  return (
    <>
      <div className="card mb-3">
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
            Comment
          </a>
        </div>
      </div>
      {comments.length != 0
        ? comments?.map((post) => (
            <UserComment
              title={post?.commentTitle}
              email={userloggedIn.email}
              body={post?.commentBody}
              key={post?.commentTitle}
            />
          ))
        : undefined}
    </>
  );
}

export default NewComment;
