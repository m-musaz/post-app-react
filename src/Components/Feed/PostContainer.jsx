import React, { useState, useEffect } from "react";
import UserComment from "./Comment";
import axios from "axios";
import EditPost from "./editPost";
import NewComment from "./NewComment";

function PostContainer({
  title,
  body,
  postId,
  userId,
  userloggedIn,
  removePost,
}) {
  const [userComments, setUserComments] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [postTitle, setPostTitle] = useState(title);
  const [postBody, setPostBody] = useState(body);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        setUserComments(res?.data);
      } catch (err) {
        alert(err);
      }
    }

    postId ? fetchData() : undefined;
  }, []);

  const removeComment = (commentTitle) => {
    setUserComments(
      userComments.filter((comment) => comment.name != commentTitle)
    );
  };

  return (
    <>
      {editMode ? (
        <EditPost
          Body={postBody}
          Title={postTitle}
          setBody={setPostBody}
          setTitle={setPostTitle}
          setEditMode={setEditMode}
        />
      ) : (
        <div className="card mt-4" style={{ width: "100%" }}>
          <div className="card-body">
            <div className="row justify-content-end">
              {userloggedIn ? (
                userloggedIn.id == userId ? (
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => removePost(title)}
                  ></button>
                ) : undefined
              ) : undefined}
              <h5 className="card-title">{postTitle}</h5>
            </div>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {"User: " + userId}
            </h6>
            <p className="card-text">{postBody}</p>
            <a
              className="btn btn-dark mb-3"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${postId}`}
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Comments
            </a>
            {userloggedIn ? (
              userloggedIn.id == userId ? (
                <a
                  className="btn btn-dark mb-3 mx-3"
                  role="button"
                  onClick={() => setEditMode(true)}
                >
                  Edit Post
                </a>
              ) : undefined
            ) : undefined}

            <div className="collapse" id={`collapse${postId}`}>
              {userloggedIn ? (
                userloggedIn.id ? (
                  <NewComment userloggedIn={userloggedIn} />
                ) : undefined
              ) : undefined}
              {userComments?.map((comment) => (
                <UserComment
                  title={comment?.name}
                  email={comment?.email}
                  body={comment?.body}
                  key={comment?.id}
                  userLoggedIn={userloggedIn}
                  removeComment={removeComment}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostContainer;
