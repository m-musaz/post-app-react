import React, { useState, useEffect, useCallback } from "react";
import UserComment from "./Comment";
import axios from "axios";
import EditPost from "./editPost";
import NewComment from "./NewComment";
import { RotatingLines } from "react-loader-spinner";
import fetchData from "../../Services/FetchCommentData";

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
  const [loading, setLoading] = useState(true);

  const handleClick = useCallback(() => {
    if (postId) {
      fetchData(postId, setUserComments, setLoading);
    }
  }, []);

  const removeComment = (commentTitle) => {
    setUserComments(
      userComments.filter((comment) => comment.name != commentTitle)
    );
  };

  const handleEditMode = () => {
    setEditMode(true);
  };
  const handleRemovePost = () => {
    removePost(title);
  };

  function checkUserLoggedIn(comment) {
    if (userloggedIn) {
      if (comment) {
        return true;
      }
      if (userloggedIn?.id == userId) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

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
              {checkUserLoggedIn() ? (
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleRemovePost}
                ></button>
              ) : (
                false
              )}
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
              onClick={handleClick}
            >
              Comments
            </a>
            {checkUserLoggedIn() ? (
              <a
                className="btn btn-dark mb-3 mx-3"
                role="button"
                onClick={handleEditMode}
              >
                Edit Post
              </a>
            ) : (
              false
            )}

            <div className="collapse" id={`collapse${postId}`}>
              {checkUserLoggedIn("c") ? (
                <NewComment userloggedIn={userloggedIn} />
              ) : (
                false
              )}
              {loading ? (
                <div className={`loaderrow `}>
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="50"
                    visible={true}
                  />
                </div>
              ) : (
                userComments?.map((comment) => (
                  <UserComment
                    title={comment?.name}
                    email={comment?.email}
                    body={comment?.body}
                    key={comment?.id}
                    userLoggedIn={userloggedIn}
                    removeComment={removeComment}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostContainer;
