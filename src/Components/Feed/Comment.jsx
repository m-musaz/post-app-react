import React, { useState } from "react";
import EditPost from "./editPost";

function UserComment({ title, email, body, userLoggedIn }) {
  const [editMode, setEditMode] = useState(false);
  const [commentTitle, setCommentTitle] = useState(title);
  const [commentBody, setCommentBody] = useState(body);
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
          <div className="card-header">{commentTitle}</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p style={{ whiteSpace: "pre-wrap" }}>{commentBody}</p>
              <footer style={{ fontSize: ".875em", color: "#6c757d" }}>
                {email}
              </footer>
            </blockquote>
            {userLoggedIn.email == email ? (
              <a
                className="btn btn-primary my-3"
                role="button"
                onClick={() => setEditMode(true)}
              >
                Edit Comment
              </a>
            ) : undefined}
          </div>
        </div>
      )}
    </>
  );
}

export default UserComment;
