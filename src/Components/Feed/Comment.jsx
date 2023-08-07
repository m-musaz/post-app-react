import React, { useState } from "react";
import EditPost from "./editPost";
import styles from "./Comment.module.css";

function UserComment({ title, email, body, userLoggedIn, removeComment }) {
  const [editMode, setEditMode] = useState(false);
  const [commentTitle, setCommentTitle] = useState(title);
  const [commentBody, setCommentBody] = useState(body);
  const handleRemoveComment = () => {
    removeComment(commentTitle);
  };
  const handleEditMode = () => {
    setEditMode(true);
  };
  return (
    <>
      {editMode ? (
        <EditPost
          Body={commentBody}
          Title={commentTitle}
          setBody={setCommentBody}
          setTitle={setCommentTitle}
          setEditMode={setEditMode}
          comment={true}
        />
      ) : (
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between">
            {commentTitle}
            {userLoggedIn ? (
              userLoggedIn.email == email ? (
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleRemoveComment}
                ></button>
              ) : undefined
            ) : undefined}
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p className={styles.commentBody}>{commentBody}</p>
              <footer className={styles.commentFooter}>{email}</footer>
            </blockquote>
            {userLoggedIn ? (
              userLoggedIn.email == email ? (
                <button
                  className="btn btn-dark my-3"
                  role="button"
                  onClick={handleEditMode}
                >
                  Edit Comment
                </button>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default UserComment;
