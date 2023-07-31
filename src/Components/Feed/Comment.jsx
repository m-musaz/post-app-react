import React from "react";

function UserComment({ title, email, body }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p style={{ whiteSpace: "pre-wrap" }}>{body}</p>
          <footer style={{ fontSize: ".875em", color: "#6c757d" }}>
            {email}
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default UserComment;
