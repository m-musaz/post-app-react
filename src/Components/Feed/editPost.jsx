import React, { useEffect, useState } from "react";

function EditPost({ Body, Title, setBody, setTitle, setEditMode }) {
  const handleSubmit = () => {
    setEditMode(false);
  };

  return (
    <div className="row mt-5">
      <div className="card mx-0">
        <h5
          className="card-header"
          style={{ marginLeft: "-12px", marginRight: "-12px" }}
        >
          Edit your Post
        </h5>
        <div className="card-body">
          <input
            className="form-control mb-2"
            placeholder="Title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <textarea
            className="form-control post"
            rows="3"
            placeholder="What's on your mind?"
            value={Body}
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
    </div>
  );
}

export default EditPost;
