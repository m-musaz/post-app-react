import React, { useState, useEffect } from "react";
import UserComment from "./Comment";
import axios from "axios";

function PostContainer({ title, body, postId, userId }) {
  const [userComments, setUserComments] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        setUserComments(res?.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {"User: " + userId}
        </h6>
        <p className="card-text">{body}</p>
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${postId}`}
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Comments
        </a>
        <div className="collapse" id={`collapse${postId}`}>
          <div className="card card-body">
            <div className="card">
              <div className="card-body">
                <form>
                  <input
                    className="form-control"
                    placeholder="Write a comment"
                  ></input>
                  <button className="btn btn-primary">Post</button>
                </form>
              </div>
            </div>
            {userComments?.map((comment) => (
              <UserComment
                title={comment?.name}
                email={comment?.email}
                body={comment?.body}
                key={comment?.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostContainer;
